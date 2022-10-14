import type { ErrorCode } from '$http/types/ErrorCode';

export type ErrorResponse = {
  Error: {
    Message: string;
    Code: ErrorCode;
  };
};
