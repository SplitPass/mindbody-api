import type { Nullable } from '$types';
import type { WebhookEventBase } from '$webhooks/types';

export type LocationCreated = WebhookEventBase<{
  siteId: number;
  locationId: number;
  name: string;
  description: string;
  hasClasses: boolean;
  phoneExtension: Nullable<string>;
  addressLine1: string;
  addressLine2: Nullable<string>;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  latitude: number;
  longitude: number;
  tax1: number;
  tax2: number;
  tax3: number;
  tax4: number;
  tax5: number;
  webColor5: string;
}>;
