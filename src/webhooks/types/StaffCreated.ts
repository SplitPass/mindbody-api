import type { Nullable } from '$types';
import type { WebhookEventBase } from '$webhooks/types';

export type StaffCreated = WebhookEventBase<{
  staffId: number;
  siteId: number;
  addressLine1: string;
  addressLine2: Nullable<string>;
  staffFirstName: string;
  staffLastName: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  sortOrder: number;
  isIndependentContractor: boolean;
  alwaysAllowDoubleBooking: boolean;
  providerIds: string[];
  imageUrl: string;
  biography: Nullable<string>;
  gender: string;
}>;
