import type { ErrorResponse } from '$http/types/ErrorResponse';
import type { DeepReadonly } from '$types';

type BasePaginatedResponse = DeepReadonly<{
  PaginationResponse: {
    RequestedLimit: number;
    RequestedOffset: number;
    PageSize: number;
    TotalResults: number;
  };
}> &
  ErrorResponse;

export type MBGenericPaginatedResponse<TResponse extends object> = TResponse &
  BasePaginatedResponse;

export type BaseMindbodyPaginatedResponse<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TResponse extends { [key in TKey]: any },
  TKey extends keyof TResponse = keyof TResponse,
> = TResponse & BasePaginatedResponse;

export type PaginationKey<T> = T extends BaseMindbodyPaginatedResponse<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  infer TRes,
  infer TKey
>
  ? TKey
  : never;
