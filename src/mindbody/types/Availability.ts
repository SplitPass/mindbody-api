import type { Program, SessionType, Staff } from '$mindbody/types';

export type Availabilities = {
  Availabilities: Availability[];
};

export type Availability = {
  Id: number;
  Staff: Staff;
  SessionType: SessionType;
  Program: Program;
  StartDateTime: string;
  EndDateTime: string;
  BookableEndDateTime: string;
  Location: Location;
};
