import type { Nullable } from '$types';

export type Transactions = {
  Transactions: Transaction[];
};

export type Transaction = {
  TransactionId: number;
  SaleId: number;
  ClientId: number;
  Amount: number;
  Settled: boolean;
  Status: 'Approved' | 'Pending' | 'Approved (Voided)' | 'Funded';
  TransactionTime: string;
  AuthTime: string;
  LocationId: number;
  MerchantId: string;
  TerminalId: Nullable<number>;
  CardExpirationMonth: string;
  CardExpirationYear: string;
  CCLastFour: string;
  CardType: string;
  CCSwiped: boolean;
  ACHLastFour: string;
};
