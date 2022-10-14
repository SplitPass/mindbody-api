import type { Nullable } from '$types';

export type PurchaseAccountCredit = {
  AmountPaid: number;
  ClientId: number;
  SalesId: number;
  EmailReceipt: boolean;
  PaymentProcessingFailures: Nullable<{
    Type: string;
    Message: string;
    AuthenticationRedirectUrl: string;
  }>;
};
