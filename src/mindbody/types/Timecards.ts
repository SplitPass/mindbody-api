import type { DeepReadonly } from '$types';

export type Timecards = DeepReadonly<{
  TimeCards: {
    StaffId: number;
    Task: string;
    HourlyRate: string;
    TimeIn: string;
    TimeOut: string;
    Hours: number;
    Earnings: string;
  }[];
}>;
