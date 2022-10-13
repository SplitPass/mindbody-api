import type { DeepReadonly, Nullable } from '$types';

export type UpdatedClientRewards = DeepReadonly<{
  Transaction: {
    Action: string;
    Points: number;
    Source: string;
    SourceID: Nullable<number>;
    ActionDateTime: string;
    ExpirationDateTime: string;
  };
  Balance: number;
}>;
