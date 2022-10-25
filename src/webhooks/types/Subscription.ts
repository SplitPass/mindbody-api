import type { Nullable } from '$types';
import type { SubscriptionStatus } from '$webhooks/types/SubscriptionStatus';

export type Subscriptions = {
  items: Subscription[];
};

export type Subscription = {
  subscriptionId: string;
  status: SubscriptionStatus;
  subscriptionCreationDateTime: string;
  statusChangeDate: string;
  statusChangeMessage: Nullable<string>;
  statusChangeUser: string;
  eventIds: string[];
  eventSchemaVersion: number;
  referenceId: string;
  webhookUrl: string;
};

export type DeactivatedSubscription = {
  message: string;
  deactivationDateTime: string;
  subscriptionId: string;
  referenceId: string;
};
