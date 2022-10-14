import type { Program } from '$mindbody/types';

export type ClientServices = {
  ClientServices: ClientService[];
};

export type ClientService = {
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
};
