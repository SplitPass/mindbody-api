import type { DeepReadonly } from '$types';

export type Visit = DeepReadonly<{
  AppointmentId: number;
  AppointmentGenderPreference: string;
  AppointmentStatus:
    | 'None'
    | 'Requested'
    | 'Booked'
    | 'Completed'
    | 'Confirmed'
    | 'Arrived'
    | 'NoShow'
    | 'Cancelled'
    | 'LateCancelled';
  ClassId: number;
  ClientId: number;
  StartDateTime: string;
  EndDateTime: string;
  Id: number;
  LastModifiedDateTime: string;
  LateCancelled: boolean;
  SiteId: number;
  LocationId: number;
  MakeUp: boolean;
  Name: string;
  ServiceId: number;
  ServiceName: string;
  ProductId: number;
  SignedIn: boolean;
  StaffId: number;
  WebSignup: boolean;
  Action: 'None' | 'Added' | 'Updated' | 'Failed' | 'Removed';
  Missed: boolean;
  VisitType: number;
  TypeGroup: number;
  TypeTaken: string;
}>;
