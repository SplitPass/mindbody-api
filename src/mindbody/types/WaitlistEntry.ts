import type { ClassSchedule, Client } from '$mindbody/types';

export type WaitlistEntries = {
  WaitlistEntries: WaitlistEntry[];
};

export type WaitlistEntry = {
  ClassDate: string;
  ClassId: number;
  ClassSchedule: ClassSchedule;
  Client: Client;
  EnrollmentDateForward: string;
  Id: number;
  RequestDateTime: string;
  VisitRefNo: number;
  Web: boolean;
};
