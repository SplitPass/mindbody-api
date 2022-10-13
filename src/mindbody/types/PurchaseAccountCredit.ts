import type { DeepReadonly, Nullable } from '$types';

export type PurchaseAccountCredit = DeepReadonly<{
  AmountPaid: number;
  ClientId: number;
  SalesId: number;
  EmailReceipt: boolean;
  PaymentProcessingFailures: Nullable<{
    Type: string;
    Message: string;
    AuthenticationRedirectUrl: string;
  }>;
}>;
