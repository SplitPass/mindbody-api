import type { WebhookEventBase } from '$webhooks/types';

export type ClientContractCancelled = WebhookEventBase<{
  siteId: number;
  clientId: string;
  clientUniqueId: number;
  clientContractId: number;
}>;
