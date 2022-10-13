import type { DeepReadonly, Nullable } from '$types';

export type Contracts = DeepReadonly<{
  Contracts: Contract[];
}>;

export type Contract = DeepReadonly<{
  Id: number;
  Name: string;
  Description: string;
  AssignsMembershipId: number;
  AssignsMembershipName: string;
  SoldOnline: boolean;
  ContractItems: {
    Id: string;
    Name: string;
    Description: string;
    Type: string;
    Price: number;
    Quantity: number;
    OneTimeItem: boolean;
  }[];
  IntroOffer: 'None' | 'NewConsumer' | 'NewAndReturningCustomer';
  AutopaySchedule: Nullable<{
    FrequencyType: 'SetNumberOfAutopays' | 'MonthToMonth';
    FrequencyValue: Nullable<number>;
    FrequencyTimeUnit: Nullable<'Weekly' | 'Monthly' | 'Yearly'>;
  }>;
  NumberOfAutopays: Nullable<number>;
  AutopayTriggerType: 'ContractExpires' | 'ContractAutomaticallyRenews';
  ActionUponCompletionOfAutopays: string;
  ClientsChargedOn:
    | 'OnSaleDate'
    | 'FirstOfTheMonth'
    | 'FifteenthOfTheMonth'
    | 'LastDayOfTheMonth'
    | 'FirstOrFifteenthOfTheMonth'
    | 'FirstOrSixteenthOfTheMonth'
    | 'FifteenthOrEndOfTheMonth'
    | 'SpecificDate';
  ClientsChargedOnSpecificDate: Nullable<string>;
  DiscountAmount: number;
  DepositAmount: number;
  FirstAutopayFree: boolean;
  LastAutopayFree: boolean;
  ClientTerminateOnline: boolean;
  MembershipTypeRestrictions: {
    Id: number;
    Name: string;
  }[];
  LocationPurchaseRestrictionIds: number[];
  LocationPurchaseRestrictionNames: string[];
  AgreementTerms: string;
  RequiresElectronicConfirmation: boolean;
  AutopayEnabled: boolean;
  FirstPaymentAmountSubtotal: number;
  FirstPaymentAmountTax: number;
  FirstPaymentAmountTotal: number;
  RecurringPaymentAmountSubtotal: number;
  RecurringPaymentAmountTax: number;
  RecurringPaymentAmountTotal: number;
  TotalContractAmountSubtotal: number;
  TotalContractAmountTax: number;
  TotalContractAmountTotal: number;
}>;
