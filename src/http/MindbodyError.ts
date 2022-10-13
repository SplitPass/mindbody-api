import type { ErrorCode, ErrorResponse } from '$http/types';

export class MindbodyError extends Error {
  public code: ErrorCode;

  constructor(errorResponse: ErrorResponse) {
    super();
    this.message = errorResponse.Error.Message;
    this.code = errorResponse.Error.Code;
  }
}
