import type {
  ClassDescription,
  Client,
  Location,
  Staff,
  Visit,
} from '$mindbody/types';
import type { Nullable } from '$types';

export type Classes = {
  Classes: Class[];
};

export type Class = {
  ClassScheduleId: number;
  Visits: Nullable<Visit[]>;
  Clients: Client[];
  Location: Location;
  Resource: Nullable<{
    Id: number;
    Name: string;
  }>;
  MaxCapacity: number;
  WebCapacity: number;
  TotalBooked: number;
  TotalBookedWaitlist: number;
  WebBooked: number;
  SemesterId: Nullable<number>;
  IsCanceled: boolean;
  Substitute: boolean;
  Active: boolean;
  IsWaitlistAvailable: boolean;
  IsEnrolled: Nullable<boolean>;
  HideCancel: boolean;
  Id: number;
  IsAvailable: boolean;
  StartDateTime: string;
  EndDateTime: string;
  LastModifiedDateTime: string;
  ClassDescription: ClassDescription;
  Staff: Staff;
  BookingWindow: {
    StartDateTime: string;
    EndDateTime: string;
    DailyStartTime: Nullable<string>;
    DailyEndTime: Nullable<string>;
  };
  BookingStatus: 'PaymentRequired' | 'BookAndPayLater' | 'Free';
  VirtualStreamLink: Nullable<string>;
};
