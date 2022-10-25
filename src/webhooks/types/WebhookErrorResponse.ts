import type { WebhookErrorCode } from './WebhookErrorCode';

export type WebhookErrorResponse = {
  errors: {
    errorCode: number;
    errorType: WebhookErrorCode;
    errorMessage: string;
  }[];
};
