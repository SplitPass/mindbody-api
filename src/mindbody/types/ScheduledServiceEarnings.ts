import type { DeepReadonly } from '$types';

export type ScheduledServiceEarnings = DeepReadonly<{
  ScheduledServiceEarnings: {
    StaffId: number;
    ScheduledServiceId: number;
    ScheduledServiceType: 'Class' | 'Appointment';
    Earnings: number;
    DateTime: string;
  }[];
}>;
