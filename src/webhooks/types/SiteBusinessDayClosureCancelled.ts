import type { WebhookEventBase } from '$webhooks/types';

export type SiteBusinessDayClosureCancelled = WebhookEventBase<{
  siteId: number;
  businessDayClosureId: number;
}>;
