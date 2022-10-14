export type MobileProviders = {
  MobileProviders: MobileProvider[];
};

export type MobileProvider = {
  Id: number;
  Active: boolean;
  ProviderName: string;
  ProviderAddress: string;
};
