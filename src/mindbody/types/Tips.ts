import type { DeepReadonly } from '$types';

export type Tips = DeepReadonly<{
  Tips: {
    StaffId: number;
    SaleId: number;
    SaleDateTime: string;
    Earnings: number;
  }[];
}>;
