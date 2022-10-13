import type { DeepReadonly } from '$types';

export type ReturnSale = DeepReadonly<{
  ReturnSaleID: number;
  TrainerID: number;
  Amount: number;
}>;
