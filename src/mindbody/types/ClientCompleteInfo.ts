import type {
  Client,
  ClientArrival,
  ClientMembership,
  ClientService,
  Contract,
} from '$mindbody/types';

export type ClientCompleteInfo = {
  Client: Client;
  ClientServices: ClientService[];
  ClientContracts: Contract[];
  ClientMemberships: ClientMembership[];
  ClientArrivals: ClientArrival[];
};
