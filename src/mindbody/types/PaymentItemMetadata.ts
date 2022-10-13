import type { DeepReadonly } from '$types';

export type CreditCardPaymentItemMetadata = DeepReadonly<{
  Amount: number;
  CreditCardNumber: string;
  ExpMonth: number;
  ExpYear: number;
  Cvv: string;
  BillingName: string;
  BillingAddress: string;
  BillingCity: string;
  BillingState: string;
  BillingPostalCode: string;
  SaveInfo?: boolean;
}>;

export type PackagePaymentItemMetadata = DeepReadonly<{
  Id: number;
}>;

export type TipPaymentItemMetadata = DeepReadonly<{
  StaffId: number;
  Amount: number;
}>;

export type StoredCardPaymentItemMetadata = DeepReadonly<{
  Amount: number;
  Last4: string;
}>;

export type DirectDebitPaymentItemMetadata = DeepReadonly<{
  Amount: number;
}>;

export type EncryptedTrackDataPaymentItemMetadata = DeepReadonly<{
  Amount: number;
  TrackData: string;
}>;

export type TrackDataPaymentItemMetadata = DeepReadonly<{
  Amount: number;
  TrackData: string;
}>;

export type DebitPaymentItemMetadata = DeepReadonly<{
  Amount: number;
  TrackData: string;
}>;

export type CustomPaymentItemMetadata = DeepReadonly<{
  Id: number;
  Amount: number;
}>;

export type CompPaymentItemMetadata = DeepReadonly<{
  Amount: number;
}>;

export type CashPaymentItemMetadata = DeepReadonly<{
  Amount: number;
  Notes?: string;
}>;

export type CheckPaymentItemMetadata = DeepReadonly<{
  Amount: number;
  Notes?: string;
}>;

export type GiftCardPaymentItemMetadata = DeepReadonly<{
  Amount: number;
  CardNumber: string;
  Notes?: string;
}>;
