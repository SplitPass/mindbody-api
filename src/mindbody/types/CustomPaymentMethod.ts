import type { DeepReadonly } from '$types';

export type CustomPaymentMethods = DeepReadonly<{
  PaymentMethods: CustomPaymentMethod[];
}>;

export type CustomPaymentMethod = DeepReadonly<{
  Id: number;
  Name: string;
}>;
