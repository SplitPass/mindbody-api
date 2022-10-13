import type { DeepReadonly } from '$types';

export type Semesters = DeepReadonly<{
  Semesters: Semester[];
}>;

export type Semester = DeepReadonly<{
  Id: number;
  Name: string;
  Description: string;
  StartDate: string;
  EndDate: string;
  MultiRegistrationDiscount: number;
  MultiRegistrationDeadline: string;
  Active: boolean;
}>;
