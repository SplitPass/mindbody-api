import type { Nullable } from '$types';
import type { WebhookEventBase } from '$webhooks/types';

export type ClientCreated = WebhookEventBase<{
  siteId: number;
  clientId: string;
  clientUniqueId: number;
  creationDateTime: string;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  homePhone: Nullable<string>;
  workPhone: Nullable<string>;
  addressLine1: string;
  addressLine2: Nullable<string>;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  birthDateTime: string;
  gender: string;
  appointmentGenderPreference: Nullable<'Male' | 'Female'>;
  firstAppointmentDateTime: string;
  referredBy: Nullable<string>;
  isProspect: boolean;
  isCompany: boolean;
  isLiabilityReleased: boolean;
  liabilityAgreementDateTime: string;
  homeLocation: number;
  clientNumberOfVisitsAtSite: number;
  indexes: {
    indexName: string;
    indexValue: string;
  }[];
  sendPromotionalEmails: boolean;
  sendScheduleEmails: boolean;
  sendAccountEmails: boolean;
  sendPromotionalTexts: boolean;
  sendScheduleTexts: boolean;
  sendAccountTexts: boolean;
  creditCardLastFour: string;
  creditCardExpDate: string;
  directDebitLastFour: string;
  notes: string;
  photoUrl: string;
  previousEmail: Nullable<string>;
}>;
