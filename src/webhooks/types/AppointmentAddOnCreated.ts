import type { WebhookEventBase } from '$webhooks/types';

export type AppointmentAddOnCreated = WebhookEventBase<{
  siteId: number;
  appointmentId: number;
  addOnAppointmentId: number;
  addOnName: string;
  clientId: string;
  staffId: number;
}>;
