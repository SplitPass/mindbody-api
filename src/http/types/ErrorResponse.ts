import type { ErrorCode } from '$http/types/ErrorCode';
import type { DeepReadonly } from '$types';

export type ErrorResponse = DeepReadonly<{
  Error: {
    Message: string;
    Code: ErrorCode;
  };
}>;
