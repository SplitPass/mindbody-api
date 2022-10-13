import type { DeepReadonly } from '$types';

export type AddOns = DeepReadonly<{
  AddOnds: AddOn[];
}>;

export type AddOn = DeepReadonly<{
  Name: string;
  Id: number;
  NumDeducted: number;
  Category: string;
  CategoryId: string;
}>;
