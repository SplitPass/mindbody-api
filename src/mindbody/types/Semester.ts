export type Semesters = {
  Semesters: Semester[];
};

export type Semester = {
  Id: number;
  Name: string;
  Description: string;
  StartDate: string;
  EndDate: string;
  MultiRegistrationDiscount: number;
  MultiRegistrationDeadline: string;
  Active: boolean;
};
