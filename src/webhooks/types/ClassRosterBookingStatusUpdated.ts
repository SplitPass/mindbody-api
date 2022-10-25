import type { WebhookEventBase } from '$webhooks/types';

export type ClassRosterBookingStatusUpdated = WebhookEventBase<{
  siteId: number;
  locationId: number;
  classId: number;
  classRosterBookingId: number;
  classDateTime: string;
  signedInStatus: string;
  staffId: number;
  clientId: string;
  clientUniqueId: number;
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhone: string;
  itemId: number;
  itemName: string;
  itemSiteId: number;
  clientPassId: string;
}>;
