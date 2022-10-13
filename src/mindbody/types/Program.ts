import type { DeepReadonly } from '$types';

export type Programs = DeepReadonly<{
  Programs: Program[];
}>;

export type Program = DeepReadonly<{
  Id: number;
  Name: string;
  ScheduleType:
    | 'All'
    | 'Class'
    | 'Enrollment'
    | 'Appointment'
    | 'Resource'
    | 'Arrival';
  CancelOffset: number;
  ContentFormats: ('InPerson' | 'Livestream:Mindbody' | 'Livestream:Other')[];
}>;
