import type { DeepReadonly } from '$types';

export type CommissionType =
  | 'ItemStandardPercentageCommission'
  | 'ItemStandardFlatCommission'
  | 'ItemPromotionalPercentageCommission'
  | 'ItemPromotionalFlatCommission'
  | 'StaffStandardPercentageCommission'
  | 'StaffStandardFlatCommission'
  | 'StaffPromotionalPercentageCommission'
  | 'StaffPromotionalFlatCommission'
  | 'ItemStandardPercentageCommissionReturn'
  | 'ItemStandardFlatCommissionReturn'
  | 'ItemPromotionalPercentageCommissionReturn'
  | 'ItemPromotionalFlatCommissionReturn'
  | 'StaffStandardPercentageCommissionReturn'
  | 'StaffStandardFlatCommissionReturn'
  | 'StaffPromotionalPercentageCommissionReturn'
  | 'StaffPromotionalFlatCommissionReturn';

export type Commissions = DeepReadonly<{
  Commissions: {
    OriginatingSaleId?: number;
    StaffId: number;
    SaleDateTime: string;
    SaleId: number;
    SaleType: 'Purchase' | 'Return';
    ProductId: number;
    Earnings: number;
    EarningsDetails: {
      CommissionType: CommissionType;
      CommissionEarnings: number;
    }[];
  }[];
}>;
