import type { Kv } from '$http/types/Kv';
import type { DeepReadonly } from '$types';

export type QueryParams<TParams extends Kv> = DeepReadonly<{
  Limit?: number;
  Offset?: number;
}> &
  TParams;
