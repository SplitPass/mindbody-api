import type { Returnable } from '$http/MindbodyAPIClient';

export type PaginatedResponse<TResponse extends Returnable> = {
  PaginationResponse: {
    RequestedLimit: number;
    RequestedOffset: number;
    PageSize: number;
    TotalResults: number;
  } & TResponse;
};
