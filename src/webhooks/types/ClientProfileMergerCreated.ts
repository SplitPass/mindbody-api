import type { WebhookEventBase } from '$webhooks/types';

export type ClientProfileMergerCreated = WebhookEventBase<{
  siteId: number;
  mergeDateTime: string;
  mergedByStaffId: number;
  keptClientId: string;
  keptClientUniqueId: number;
  removedClientUniqueId: number;
}>;
