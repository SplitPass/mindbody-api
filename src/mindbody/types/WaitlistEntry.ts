import type { DeepReadonly } from '$types';
import type { ClassSchedule, Client } from '$mindbody/types';

export type WaitlistEntries = DeepReadonly<{
  WaitlistEntries: WaitlistEntry[];
}>;

export type WaitlistEntry = DeepReadonly<{
  ClassDate: string;
  ClassId: number;
  ClassSchedule: ClassSchedule;
  Client: Client;
  EnrollmentDateForward: string;
  Id: number;
  RequestDateTime: string;
  VisitRefNo: number;
  Web: boolean;
}>;
