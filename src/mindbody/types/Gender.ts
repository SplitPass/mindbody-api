import type { DeepReadonly } from '$types';

export type GenderOptions = DeepReadonly<{
  GenderOptions: Gender[];
}>;

export type Gender = DeepReadonly<{
  Id: number;
  Name: string;
  IsActive: boolean;
  IsDefault: boolean;
}>;
