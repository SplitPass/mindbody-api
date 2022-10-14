import type {
  Appointment,
  Availability,
  Unavailability,
} from '$mindbody/types';
import type { Nullable } from '$types';

export type StaffMembers = {
  StaffMembers: Staff[];
};

export type Staff = {
  Address: Nullable<string>;
  AppointmentInstructor: boolean;
  AlwaysAllowDoubleBooking: boolean;
  Bio: Nullable<string>;
  City: Nullable<string>;
  Country: Nullable<string>;
  Email: string;
  FirstName: string;
  DisplayName: Nullable<string>;
  HomePhone: Nullable<string>;
  Id: number;
  IndependentContractor: boolean;
  IsMale: boolean;
  LastName: string;
  MobilePhone: Nullable<string>;
  Name: string;
  PostalCode: string;
  ClassTeacher: boolean;
  SortOrder: number;
  State: string;
  WorkPhone: Nullable<string>;
  ImageUrl: Nullable<string>;
  ClassAssistant: boolean;
  ClassAssistant2: boolean;
  EmploymentStart: Nullable<string>;
  EmploymentEnd: Nullable<string>;
  ProviderIDs: Nullable<string[]>;
  Rep: boolean;
  Rep2: boolean;
  Rep3: boolean;
  Rep4: boolean;
  Rep5: boolean;
  Rep6: boolean;
  Appointments: Appointment[];
  Unavailabilities: Unavailability[];
  Availabilities: Availability[];
  EmpID: Nullable<string>;
  StaffSettings: {
    UseStaffNicknames: Nullable<boolean>;
    ShowStaffLastNamesOnSchedules: Nullable<boolean>;
  };
};
