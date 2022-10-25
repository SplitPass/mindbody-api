import type { ClientService, Location } from '$mindbody/types';

export type ActiveClientMemberships = {
  ClientMemberships: ClientMembership[];
};

export type ClientsMemberships = {
  ClientMemberships: {
    ClientId: string;
    Memberships: ClientMembership[];
  }[];
};

export type ClientMembership = {
  RestrictedLocations: Location[];
  IconCode: string;
  MembershipId: number;
} & ClientService;
