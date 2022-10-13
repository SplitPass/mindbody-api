import type { ClientService } from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type ActiveClientMemberships = DeepReadonly<{
  ClientMemberships: ClientMembership[];
}>;

export type ClientsMemberships = DeepReadonly<{
  ClientMemberships: {
    ClientId: string;
    Memberships: ClientMembership[];
  }[];
}>;

export type Memberships = DeepReadonly<{
  Memberships: ClientMembership[];
}>;

export type ClientMembership = DeepReadonly<{
  RestrictedLocations: Location[];
  IconCode: string;
  MembershipId: number;
}> &
  ClientService;
