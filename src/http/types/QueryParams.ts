import type { Kv } from '$http/types/Kv';

export type QueryParams<TParams extends Kv> = {
  Limit?: number;
  Offset?: number;
} & TParams;
