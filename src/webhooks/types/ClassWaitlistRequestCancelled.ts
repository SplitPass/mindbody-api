import type { WebhookEventBase } from '$webhooks/types';

export type ClassWaitlistRequestCancelled = WebhookEventBase<{
  siteId: number;
  waitlistEntryId: number;
}>;
