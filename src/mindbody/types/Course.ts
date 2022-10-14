import type { Location, Program, Staff } from '$mindbody/types';

export type Courses = {
  Courses: Course[];
};

export type Course = {
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
};
