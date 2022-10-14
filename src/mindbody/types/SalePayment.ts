import type { Nullable } from '$types';

export type SalePayment = {
  Id: number;
  Amount: number;
  Method: number;
  Type: string;
  Notes: string;
  TransactionId: Nullable<number>;
};
