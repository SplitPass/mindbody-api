import type { Nullable } from '$types';

export type Memberships = {
  Memberships: Membership[];
};

export type Membership = {
  MembershipId: number;
  MembershipName: string;
  Priority: number;
  MemberRetailDiscount: number;
  MemberServiceDiscount: number;
  AllowClientsToScheduleUnpaid: boolean;
  OnlineBookingRestrictedToMembersOnly: {
    Id: number;
    Name: string;
  }[];
  DayOfMonthSchedulingOpensForNextMonth: Nullable<number[]>;
  RestrictSelfSignInToMembersOnly: boolean;
  AllowMembersToBookAppointmentsWithoutPaying: boolean;
  AllowMembersToPurchaseNonMembersServices: boolean;
  AllowMembersToPurchaseNonMembersProducts: boolean;
  IsActive: boolean;
};
