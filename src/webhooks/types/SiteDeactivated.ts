import type { WebhookEventBase } from '$webhooks/types';

export type SiteDeactivated = WebhookEventBase<{
  siteId: number;
  businessDayClosureId: number;
  nameClosedDay: string;
  startDateTime: string;
  endDateTime: string;
  serviceCategoriesAffectedIds: number[];
}>;
