import type { WebhookEventBase } from '$webhooks/types';

export type ClassWaitlistRequestCreated = WebhookEventBase<{
  siteId: number;
  locationId: number;
  classId: number;
  classScheduleId: number;
  waitlistEntryId: number;
  waitlistMaxSize: number;
  clientId: string;
  clientUniqueId: number;
  clientEmail: string;
  clientPhone: string;
  classStartDateTime: string;
  classEndDateTime: string;
  clientsNumberOfVisitsAtSite: number;
}>;
