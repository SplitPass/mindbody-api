import type { WebhookEventBase } from '$webhooks/types';

export type ClassScheduleUpdated = WebhookEventBase<{
  siteId: number;
  locationId: number;
  classScheduleId: number;
  classDescriptionId: number;
  resources: {
    id: number;
    name: string;
  }[];
  maxCapacity: number;
  webCapacity: number;
  staffId: number;
  staffName: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  daysOfWeek: string[];
  assistantOneId: number;
  assistantOneName: string;
  assistantTwoId: number;
  assistantTwoName: string;
}>;
