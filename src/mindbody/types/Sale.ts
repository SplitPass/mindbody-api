import type { PurchasedItem, SalePayment } from '$mindbody/types';
import type { DeepReadonly, Nullable } from '$types';

export type Sales = DeepReadonly<{
  Sales: Sale[];
}>;

export type Sale = DeepReadonly<{
  Id: number;
  SaleDate: string;
  SaleTime: string;
  SaleDateTime: string;
  OriginalSaleDateTime: string;
  SalesRepId: Nullable<number>;
  ClientId: string;
  RecipientClientId: Nullable<number>;
  PurchasedItems: PurchasedItem[];
  LocationId: number;
  Payments: SalePayment[];
}>;
