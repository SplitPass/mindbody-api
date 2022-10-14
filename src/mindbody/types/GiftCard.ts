import type { Nullable } from '$types';

export type GiftCardBalance = {
  BarcodeId: string;
  RemainingBalance: number;
};

export type GiftCards = {
  GiftCards: GiftCard[];
};

export type GiftCard = {
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
};
