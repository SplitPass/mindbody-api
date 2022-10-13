import type {
  Client,
  ClientArrival,
  ClientMembership,
  ClientService,
  Contract,
} from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type ClientCompleteInfo = DeepReadonly<{
  Client: Client;
  ClientServices: ClientService[];
  ClientContracts: Contract[];
  ClientMemberships: ClientMembership[];
  ClientArrivals: ClientArrival[];
}>;
