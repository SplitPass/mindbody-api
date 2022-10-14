export type ScheduledServiceEarnings = {
  ScheduledServiceEarnings: {
    StaffId: number;
    ScheduledServiceId: number;
    ScheduledServiceType: 'Class' | 'Appointment';
    Earnings: number;
    DateTime: string;
  }[];
};
