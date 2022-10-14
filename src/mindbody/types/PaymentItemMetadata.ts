export type CreditCardPaymentItemMetadata = {
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
};

export type PackagePaymentItemMetadata = {
  Id: number;
};

export type TipPaymentItemMetadata = {
  StaffId: number;
  Amount: number;
};

export type StoredCardPaymentItemMetadata = {
  Amount: number;
  Last4: string;
};

export type DirectDebitPaymentItemMetadata = {
  Amount: number;
};

export type EncryptedTrackDataPaymentItemMetadata = {
  Amount: number;
  TrackData: string;
};

export type TrackDataPaymentItemMetadata = {
  Amount: number;
  TrackData: string;
};

export type DebitPaymentItemMetadata = {
  Amount: number;
  TrackData: string;
};

export type CustomPaymentItemMetadata = {
  Id: number;
  Amount: number;
};

export type CompPaymentItemMetadata = {
  Amount: number;
};

export type CashPaymentItemMetadata = {
  Amount: number;
  Notes?: string;
};

export type CheckPaymentItemMetadata = {
  Amount: number;
  Notes?: string;
};

export type GiftCardPaymentItemMetadata = {
  Amount: number;
  CardNumber: string;
  Notes?: string;
};
