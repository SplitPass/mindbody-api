import type { DeepReadonly } from '$types';

export type Resources = DeepReadonly<{
  Resources: Resource[];
}>;

export type Resource = DeepReadonly<{
  Id: number;
  Name: string;
}>;
