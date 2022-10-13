import type {
  ClassDescription,
  Client,
  Course,
  Location,
  Staff,
  Visit,
} from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type AddClientToEnrollment = DeepReadonly<{
  Classes: {
    ClassScheduleId: number;
    Visits: Visit[];
    Clients: Client[];
    Location: Location;
    Resource: {
      Id: number;
      Name: string;
    };
    MaxCapacity: number;
    WebCapacity: number;
    TotalBooked: number;
    TotalBookedWaitlist: number;
    WebBooked: number;
    SemesterId: number;
    IsCanceled: boolean;
    Substitute: boolean;
    Active: boolean;
    IsWaitlistAvailable: boolean;
    IsEnrolled: boolean;
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
      DailyStartTime: string;
      DailyEndTime: string;
    };
    BookingStatus: string;
    VirtualStreamLink: string;
  }[];
  Clients: Client[];
  Course: Course;
  SemesterId: number;
  IsAvailable: boolean;
  Id: number;
  ClassDescription: ClassDescription;
  DaySunday: boolean;
  DayMonday: boolean;
  DayTuesday: boolean;
  DayWednesday: boolean;
  DayThursday: boolean;
  DayFriday: boolean;
  DaySaturday: boolean;
  AllowOpenEnrollment: boolean;
  AllowDateForwardEnrollment: boolean;
  StartTime: string;
  EndTime: string;
  StartDate: string;
  EndDate: string;
  Staff: Staff;
  Location: Location;
}>;
