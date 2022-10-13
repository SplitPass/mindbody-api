import type { DeepReadonly } from '$types';

export type ApplicableItem = DeepReadonly<{
  ID: number;
  Name: string;
  Type: 'ServiceCategory' | 'RevenueCategory' | 'Supplier' | 'Item';
}>;
