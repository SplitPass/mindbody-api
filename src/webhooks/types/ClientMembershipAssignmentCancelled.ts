import type { WebhookEventBase } from '$webhooks/types';

export type ClientMembershipAssignmentCancelled = WebhookEventBase<{
  siteId: number;
  clientId: string;
  membershipId: number;
}>;
