import type { DeepReadonly } from '$types';

export type MobileProviders = DeepReadonly<{
  MobileProviders: MobileProvider[];
}>;

export type MobileProvider = DeepReadonly<{
  Id: number;
  Active: boolean;
  ProviderName: string;
  ProviderAddress: string;
}>;
