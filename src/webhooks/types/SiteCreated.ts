import type { WebhookEventBase } from '$webhooks/types';

export type SiteCreated = WebhookEventBase<{
  siteId: number;
  name: string;
  description: string;
  logoURL: string;
  pageColor1: string;
  pageColor2: string;
  pageColor3: string;
  pageColor4: string;
  pageColor5: string;
  acceptsVisa: boolean;
  acceptsDiscover: boolean;
  acceptsMasterCard: boolean;
  acceptsAmericanExpress: boolean;
  isEmailContactApproved: boolean;
  isSmsPackageEnabled: boolean;
  subscriptionLevel: string;
  isActive: boolean;
}>;
