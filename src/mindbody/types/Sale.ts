import type { PurchasedItem, SalePayment } from '$mindbody/types';
import type { Nullable } from '$types';

export type Sales = {
  Sales: Sale[];
};

export type Sale = {
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
};
