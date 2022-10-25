import type { WebhookEventBase } from '$webhooks/types';

export type ClassScheduleCancelled = WebhookEventBase<{
  siteId: number;
  classScheduleId: number;
}>;
