import type { Nullable } from '$types';

export type Appointments = {
  Appointments: Appointment[];
};

export type Appointment = {
  GenderPreference: 'None' | 'Female' | 'Male';
  Duration: number;
  ProviderId: string;
  Id: number;
  Status:
    | 'None'
    | 'Requested'
    | 'Booked'
    | 'Completed'
    | 'Confirmed'
    | 'Arrived'
    | 'NoShow'
    | 'Cancelled'
    | 'LateCancelled';
  StartDateTime: string;
  EndDateTime: string;
  Notes: string;
  StaffRequested: boolean;
  ProgramId: number;
  SessionTypeId: number;
  LocationId: number;
  StaffId: number;
  ClientId: string;
  FirstAppointment: boolean;
  IsWaitlist: boolean;
  WaitlistEntryId: Nullable<number>;
  ClientServiceId: number;
  Resources: {
    Id: number;
    Name: string;
  }[];
  AddOns: {
    Id: number;
    Name: string;
    StaffId: number;
  }[];
  OnlineDescription: string;
};
