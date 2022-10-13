import type { DeepReadonly } from '$types';

export type Headers = DeepReadonly<{
  'Api-Key': string;
  'Content-Type': string;
  SiteId: string;
  Authorization?: string;
}>;
