import type { WebhookEventBase } from '$webhooks/types';

export type AppointmentAddOnDeleted = WebhookEventBase<{
  siteId: number;
  appointmentId: number;
}>;
