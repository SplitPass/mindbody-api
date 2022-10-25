import type { WebhookEventBase } from '$webhooks/types';

export type AppointmentBookingCancelled = WebhookEventBase<{
  siteId: number;
  appointmentId: number;
}>;
