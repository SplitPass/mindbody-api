import type { WebhookEventBase } from '$webhooks/types';

export type ClassDescriptionUpdated = WebhookEventBase<{
  siteId: number;
  id: number;
  name: string;
  description: string;
}>;
