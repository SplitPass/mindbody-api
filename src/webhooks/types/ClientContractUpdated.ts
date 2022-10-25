import type { WebhookEventBase } from '$webhooks/types';

export type ClientContractUpdated = WebhookEventBase<{
  siteId: number;
  agreementDateTime: string;
  clientId: string;
  clientUniqueId: number;
  clientContractId: number;
  contractStartDateTime: string;
  contractEndDateTime: string;
  isAutoRenewing: boolean;
}>;
