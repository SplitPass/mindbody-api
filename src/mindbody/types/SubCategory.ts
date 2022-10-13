import type { DeepReadonly } from '$types';

export type SubCategory = DeepReadonly<{
  Id: number;
  SubCategoryName: string;
  Active: boolean;
}>;
