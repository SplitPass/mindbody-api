import type {
  WebhooksRequestsArgsPatch,
  WebhooksRequestsArgsPost,
} from '$http/types';
import type { Kv } from '$http/types/Kv';

import { BaseClient } from '$http/BaseClient';

type Returnable = Kv | (string | number)[];

export class MindbodyWebhooksClient extends BaseClient {
  private static instance?: MindbodyWebhooksClient = new this();

  private constructor() {
    super('webhooks-client');
  }

  public static get(): MindbodyWebhooksClient {
    return this.instance ?? (this.instance = new this());
  }

  public async get<R extends Returnable>(endpoint: string): Promise<R> {
    const [client, headers] = this.webhookRequest();
    const res = await client<R>(endpoint, {
      method: 'GET',
      headers,
    });

    return res.data;
  }

  public async post<R extends Returnable>(
    endpoint: string,
    args: WebhooksRequestsArgsPost<Kv>,
  ): Promise<R> {
    const [client, headers] = this.webhookRequest();
    const res = await client<R>(endpoint, {
      method: 'POST',
      headers,
      data: args,
    });

    return res.data;
  }

  public async patch<R extends Returnable>(
    endpoint: string,
    args: WebhooksRequestsArgsPatch<Kv>,
  ): Promise<R> {
    const [client, headers] = this.webhookRequest();
    const res = await client<R>(endpoint, {
      method: 'PATCH',
      headers,
      data: args,
    });

    return res.data;
  }

  public async delete<R extends Returnable>(endpoint: string): Promise<R> {
    const [client, headers] = this.webhookRequest();
    const res = await client.delete<R>(endpoint, {
      method: 'DELETE',
      headers,
    });

    return res.data;
  }
}
