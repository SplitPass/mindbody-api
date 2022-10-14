import type { Nullable } from '$types';

export type ClientRewards = {
  Balance: number;
  Transactions: RewardTransaction[];
};

export type RewardTransaction = {
  ActionDateTime: string;
  Action: string;
  Source: string;
  SourceID: number;
  ExpirationDateTime: Nullable<string>;
  Points: number;
};
