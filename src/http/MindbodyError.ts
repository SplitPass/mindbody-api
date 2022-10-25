import type { ErrorCode, ErrorResponse } from '$http/types';
import type { WebhookErrorCode, WebhookErrorResponse } from '$webhooks/types';

export default class MindbodyError extends Error {
  public code: ErrorCode | WebhookErrorCode[];

  constructor(errorResponse: ErrorResponse | WebhookErrorResponse) {
    super();

    if (Object.keys(errorResponse).includes('errors')) {
      const error = errorResponse as WebhookErrorResponse;
      this.code = error.errors.map(e => e.errorType);
      this.message = error.errors
        .map(e => e.errorMessage)
        .join('. ')
        .trim();
      return;
    }

    const error = errorResponse as ErrorResponse;
    this.code = error.Error.Code;
    this.message = error.Error.Message;
  }
}
