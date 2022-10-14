import type { Nullable } from '$types';

export type Services = {
  Services: Service[];
};

export type Service = {
  Price: number;
  OnlinePrice: number;
  TaxIncluded: number;
  ProgramId: number;
  TaxRate: number;
  ProductId: number;
  Id: string;
  Name: string;
  Count: number;
  SellOnline: boolean;
  Type: string;
  ExpirationType: string;
  ExpirationUnit: string;
  ExpirationLength: number;
  RevenueCategory: string;
  MembershipId: Nullable<string>;
  SellAtLocationIds: number[];
  UseAtLocationIds: number[];
  Priority: string;
  IsIntroOffer: boolean;
  IntroOfferType: string;
  IsThirdPartyDiscountPricing: boolean;
  Program: string;
  Discontinued: boolean;
};
