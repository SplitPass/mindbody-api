import type { DeepReadonly } from '$types';

export type ServiceItemMetadata = DeepReadonly<{
  Id: number;
}>;

export type ProductItemMetadata = DeepReadonly<{
  Id: number;
}>;

export type PackageItemMetadata = DeepReadonly<{
  Id: number;
}>;

export type TipItemMetadata = DeepReadonly<{
  StaffId: number;
  Amount: number;
}>;
