import type { Nullable } from '$types';
import type { WebhookEventBase } from '$webhooks/types';

export type AppointmentBookingCreated = WebhookEventBase<{
  siteId: number;
  appointmentId: number;
  status: string;
  isConfirmed: boolean;
  hasArrived: boolean;
  locationId: number;
  clientId: string;
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhone: string;
  staffId: number;
  staffFirstName: string;
  staffLastName: string;
  startDateTime: string;
  endDateTime: string;
  durationMinutes: number;
  genderRequested: Nullable<'Male' | 'Female'>;
  resources: {
    id: number;
    name: string;
  }[];
  notes: Nullable<string>;
  formulaNotes: Nullable<string>;
  icdCodes: {
    code: string;
    description: string;
  }[];
  providerId: Nullable<string>;
}>;
