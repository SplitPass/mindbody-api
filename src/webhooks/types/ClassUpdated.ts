import type { Nullable } from '$types';
import type { WebhookEventBase } from '$webhooks/types';

export type ClassUpdated = WebhookEventBase<{
  siteId: number;
  locationId: number;
  classId: number;
  classScheduleId: number;
  isCancelled: boolean;
  isStaffASubstitute: boolean;
  isWaitlistAvailable: boolean;
  isIntendedForOnlineViewing: boolean;
  staffId: number;
  staffName: string;
  startDateTime: string;
  endDateTime: string;
  classDescriptionId: number;
  assistantOneId: number;
  assistantOneName: string;
  assistantTwoId: Nullable<number>;
  assistantTwoName: Nullable<string>;
  resources: {
    id: number;
    name: string;
  }[];
}>;
