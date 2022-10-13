import type { Program, SessionType, Staff } from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type Availabilities = DeepReadonly<{
  Availabilities: Availability[];
}>;

export type Availability = DeepReadonly<{
  Id: number;
  Staff: Staff;
  SessionType: SessionType;
  Program: Program;
  StartDateTime: string;
  EndDateTime: string;
  BookableEndDateTime: string;
  Location: Location;
}>;
