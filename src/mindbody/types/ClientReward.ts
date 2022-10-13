import type { DeepReadonly, Nullable } from '$types';

export type ClientRewards = DeepReadonly<{
  Balance: number;
  Transactions: RewardTransaction[];
}>;

export type RewardTransaction = DeepReadonly<{
  ActionDateTime: string;
  Action: string;
  Source: string;
  SourceID: number;
  ExpirationDateTime: Nullable<string>;
  Points: number;
}>;
