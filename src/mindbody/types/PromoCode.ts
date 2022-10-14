import type { ApplicableItem } from '$mindbody/types';

export type PromoCodes = {
  PromoCodes: PromoCode[];
};

export type PromoCode = {
  Name: string;
  Code: string;
  Active: boolean;
  Discount: {
    Type: 'Percent' | 'Amount';
    Amount: number;
  };
  ActivationDate: string;
  ExpirationDate: string;
  MaxUses: number;
  DaysAfterCloseDate: number;
  AllowOnline: number;
  DaysValid: string[];
  ApplicableItems: ApplicableItem[];
};
