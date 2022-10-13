import type { DeepReadonly, Nullable } from '$types';

export type GiftCardBalance = DeepReadonly<{
  BarcodeId: string;
  RemainingBalance: number;
}>;

export type GiftCards = DeepReadonly<{
  GiftCards: GiftCard[];
}>;

export type GiftCard = DeepReadonly<{
  Id: number;
  LocationIds: number[];
  Description: string;
  EditableByConsumer: boolean;
  CardValue: number;
  SalePrice: number;
  SoldOnline: boolean;
  MembershipRestrictionIds: number[];
  GiftCardTerms: string;
  ContactInfo: Nullable<string>;
  DisplayLogo: boolean;
  Layouts: {
    LayoutId: number;
    LayoutName: string;
    LayoutUrl: string;
  }[];
}>;
