import type { DeepReadonly } from '$types';

export type PaymentTypes = DeepReadonly<{
  PaymentTypes: PaymentType[];
}>;

export type PaymentType = DeepReadonly<{
  Id: number;
  PaymentTypeName: string;
  Active: boolean;
  Fee: number;
}>;
