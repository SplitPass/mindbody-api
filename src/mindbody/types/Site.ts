import type { DeepReadonly } from '$types';

export type Sites = DeepReadonly<{
  Sites: Site[];
}>;

export type Site = DeepReadonly<{
  AcceptsAmericanExpress: boolean;
  AcceptsDiscover: boolean;
  AcceptsMasterCard: boolean;
  AcceptsVisa: boolean;
  AcceptsDirectDebit: boolean;
  AllowsDashboardAccess: boolean;
  ContactEmail: string;
  Description: string;
  Id: number;
  LogoUrl: string;
  Name: string;
  PageColor1: string;
  PageColor2: string;
  PageColor3: string;
  PageColor4: string;
  PricingLevel:
    | 'No Subscription'
    | 'Accelerate'
    | 'Essential'
    | 'Legacy'
    | 'Connect Listing'
    | 'Pro'
    | 'Solo'
    | 'Essential 2.0'
    | 'Accelerate 2.0'
    | 'Ultiamte 2.0'
    | 'Starter';
  SmsPackageEnabled: boolean;
  TaxInclusivePrices: boolean;
  CurrencyIsoCode: string;
  CountryCode: string;
  TimeZone: string;
}>;
