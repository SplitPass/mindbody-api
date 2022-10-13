import type { Program } from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type ClientServices = DeepReadonly<{
  ClientServices: ClientService[];
}>;

export type ClientService = DeepReadonly<{
  ActiveDate: string;
  Count: number;
  Current: boolean;
  ExpirationDate: string;
  Id: number;
  ProductId: number;
  Name: string;
  PaymentDate: string;
  Program: Program;
  Remaining: number;
  SiteId: number;
  Action: 'None' | 'Added' | 'Updated' | 'Failed' | 'Removed';
}>;
