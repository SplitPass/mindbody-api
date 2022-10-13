import type { DeepReadonly } from '$types';

export type ClientIndexes = DeepReadonly<{
  ClientIndexes: ClientIndex[];
}>;

export type ClientIndex = DeepReadonly<{
  Id: number;
  Name: string;
  RequiredBusinessMode: boolean;
  RequiredConsumerMode: boolean;
  Values: {
    Active: boolean;
    Id: number;
    Name: string;
  }[];
  Action: string;
}>;
