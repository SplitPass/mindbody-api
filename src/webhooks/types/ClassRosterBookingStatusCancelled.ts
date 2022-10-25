import type { WebhookEventBase } from '$webhooks/types';

export type ClassRosterBookingStatusCancelled = WebhookEventBase<{
  siteId: number;
  locationId: number;
  classId: number;
  classRosterBookingId: number;
  clientId: string;
  clientUniqueId: number;
}>;
