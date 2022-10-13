import type { Location, Program, Staff } from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type Courses = DeepReadonly<{
  Courses: Course[];
}>;

export type Course = DeepReadonly<{
  Id: number;
  Name: string;
  Description: string;
  Notes: string;
  StartDate: string;
  EndDate: string;
  Location: Location;
  ImageUrl: string;
  Organizer: Staff;
  Program: Program;
}>;
