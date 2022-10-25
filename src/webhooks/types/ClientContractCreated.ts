import type { WebhookEventBase } from '$webhooks/types';

export type ClientContractCreated = WebhookEventBase<{
  siteId: number;
  clientId: string;
  clientUniqueId: number;
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  agreementDateTime: string;
  contractSoldByStaffId: number;
  contractSoldByStaffFirstName: string;
  contractSoldByStaffLastName: string;
  contractOriginationLocation: number;
  contractId: number;
  contractName: string;
  clientContractId: number;
  contractStartDateTime: string;
  contractEndDateTime: string;
  isAutoRenewing: boolean;
}>;
