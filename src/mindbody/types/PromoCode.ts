import type { ApplicableItem } from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type PromoCodes = DeepReadonly<{
  PromoCodes: PromoCode[];
}>;

export type PromoCode = DeepReadonly<{
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
}>;
