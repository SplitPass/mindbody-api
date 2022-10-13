import type {
  Class,
  ClassDescription,
  Client,
  Course,
  Location,
  Staff,
} from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type Enrollments = DeepReadonly<{
  Enrollments: Enrollment[];
}>;

export type Enrollment = DeepReadonly<{
  Id: number;
  IsAvailable: boolean;
  SemesterId: number;
  Classes: Class[];
  Clients: Client[];
  Course: Course;
  Staff: Staff;
  Location: Location;
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
}>;
