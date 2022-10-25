import type { WebhookEventBase } from '$webhooks/types';

export type ClientMembershipAssignmentCreated = WebhookEventBase<{
  siteId: number;
  clientId: string;
  clientUniqueId: number;
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  membershipId: number;
  membershipName: string;
}>;
