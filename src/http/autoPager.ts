/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AxiosInstance } from 'axios';
import type { Returnable } from '$http/MindbodyAPIClient';
import type { PaginatedResponse, Headers } from '$http/types';

import pLimit from 'p-limit';

type Args = {
  client: AxiosInstance;
  headers: Headers;
  endpoint: string;
  firstPage: PaginatedResponse<Returnable>;
  objectIndexKey: string;
};

export async function autoPager<T extends Returnable>(
  args: Args,
): Promise<PaginatedResponse<T>> {
  // @ts-expect-error
  const allResults = [args.firstPage[args.objectIndexKey]].flat();
  const totalResults = args.firstPage.PaginationResponse.TotalResults;
  const limit = args.firstPage.PaginationResponse.RequestedLimit;
  const requestCount = Math.floor(totalResults / limit);

  const requests = [];
  const pl = pLimit(100);

  for (let i = 1; i < requestCount; i++) {
    const offset = limit * i;
    requests.push(
      pl(() =>
        args.client.get(args.endpoint, {
          headers: args.headers,
          params: {
            ...args.params,
            Offset: offset,
            Limit: limit,
          },
        }),
      ),
    );
    if (i === requestCount - 1) {
      requests.push(
        pl(() =>
          args.client.get(args.endpoint, {
            headers: args.headers,
            params: {
              ...args.params,
              Offset: requestCount === 1 ? limit : offset + limit,
              Limit: limit,
            },
          }),
        ),
      );
    }
  }

  const responses = await Promise.all(requests);

  responses.forEach(res => {
    const paginatedResponse = res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = paginatedResponse[args.objectIndexKey] as unknown as any[];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    allResults.push(...data);
  });

  // @ts-expect-error
  return {
    PaginationResponse: {
      TotalResults: allResults.length,
      RequestedLimit: allResults.length,
      RequestedOffset: 0,
      PageSize: allResults.length,
    },
    [args.objectIndexKey]: allResults,
  };
}
