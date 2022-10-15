import type { AxiosInstance } from 'axios';
import type { ErrorResponse, Headers, TokenResponse } from '$http/types';

import axios, { AxiosError } from 'axios';
import Config from '$Config';
import MindbodyError from '$http/MindbodyError';
import * as TokenCache from '$http/TokenCache';

const BASE_URL = 'https://api.mindbodyonline.com/public/v6';
const TWENTY_FOUR_HOURS = 3600 * 1000 * 24;

export class BaseClient {
  protected client: AxiosInstance;

  protected constructor() {
    this.client = axios.create({ baseURL: BASE_URL });
    this.client.interceptors.response.use(
      res => res,
      err => {
        if (err instanceof AxiosError && err.response?.data != null) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          const serverErrorMessage = err.response.data?.Message as
            | string
            | undefined;

          if (serverErrorMessage != null) {
            void Promise.reject(
              new Error(
                'Mindbody Internal Server Error: ' + serverErrorMessage,
              ),
            );
          }

          const error = err.response.data as ErrorResponse;
          void Promise.reject(new MindbodyError(error));
        }

        void Promise.reject(err);
      },
    );
  }

  protected async request(siteID: string): Promise<[AxiosInstance, Headers]> {
    const headers = Config.isFullCredentialsProvided()
      ? await this.authHeaders(siteID)
      : this.basicHeaders(siteID);

    return [this.client, headers];
  }

  protected basicHeaders(siteID: string): Headers {
    return {
      'Content-Type': 'application/json',
      'Api-Key': Config.getApiKey(),
      SiteId: siteID,
    };
  }

  protected async authHeaders(siteID: string): Promise<Required<Headers>> {
    const staffToken = await this.getStaffToken(siteID);
    return {
      ...this.basicHeaders(siteID),
      Authorization: 'Bearer ' + staffToken,
    };
  }

  private async getStaffToken(siteID: string): Promise<string> {
    const cacheKey: TokenCache.CacheKey = `site_id:${siteID}`;
    const cachedToken = TokenCache.get(cacheKey);

    if (cachedToken != null) {
      return cachedToken.token;
    }

    const config = Config.get();
    const res = await this.client.post<TokenResponse>(
      '/usertoken/issue',
      {
        Username: config.username,
        Password: config.password,
      },
      {
        headers: this.basicHeaders(siteID),
      },
    );

    // Tokens expire after 7 days of inactivity but we'll
    // fetch a new one after 24 hours to cycle more often
    //
    // Since these are stored in memory you'll likely be fetching new ones
    // more frequently anyways due to server restarts
    //
    // https://developers.mindbodyonline.com/PublicDocumentation/V6#user-tokens
    TokenCache.set(cacheKey, {
      token: res.data.AccessToken,
      expirationDate: new Date(Date.now() + TWENTY_FOUR_HOURS),
    });

    return res.data.AccessToken;
  }
}
