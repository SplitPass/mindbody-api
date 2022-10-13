import type { DeepReadonly, Nullable } from '$types';

export type SalePayment = DeepReadonly<{
  Id: number;
  Amount: number;
  Method: number;
  Type: string;
  Notes: string;
  TransactionId: Nullable<number>;
}>;
