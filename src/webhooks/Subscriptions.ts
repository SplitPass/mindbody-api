import type {
  WebhooksRequestsArgsPatch,
  WebhooksRequestsArgsPost,
} from '$http/types';
import type {
  DeactivatedSubscription,
  EventType,
  Subscription,
  Subscriptions,
} from '$webhooks/types';

import { MindbodyWebhooksClient } from '$http/MindbodyWebhooksClient';

const MINDBODY = MindbodyWebhooksClient.get();

/**
 * This endpoint searches for subscriptions associated with your developer portal account:
 *
 * https://developers.mindbodyonline.com/WebhooksDocumentation#get-subscriptions
 */
async function getSubscriptions(): Promise<Subscriptions> {
  return await MINDBODY.get('/subscriptions');
}

/**
 * This endpoint finds and returns the single subscription associated with the passed ID.
 *
 * https://developers.mindbodyonline.com/WebhooksDocumentation#get-subscription-by-id
 */
async function getSubscription(subscriptionID: string): Promise<Subscription> {
  return await MINDBODY.get(`/subscriptions/${subscriptionID}`);
}

export type CreateSubscriptionPayload = {
  eventIds: EventType[];
  webhookUrl: string;
  eventSchemaVersion: 1;
  referenceId?: string;
};

/**
 * This endpoint creates a pending subscription that is linked to your developer
 * portal account. After you have created a subscription, you can activate it
 * using the PATCH Subscription endpoint.
 *
 * https://developers.mindbodyonline.com/WebhooksDocumentation#post-subscription
 */
async function createSubscription(
  args: WebhooksRequestsArgsPost<CreateSubscriptionPayload>,
): Promise<Subscription> {
  return await MINDBODY.post('/subscriptions', args);
}

export type UpdateSubscriptionPayload = {
  eventIds: EventType[];
  webhookUrl: string;
  status: 'Active' | 'DeactivatedByUser';
  eventSchemaVersion: 1;
  referenceId?: string;
};

/**
 * This endpoint can activate a new subscription or reactivate an inactive
 * subscription that is associated with your developer portal account,
 * by updating the status. You can also update your subscription’s eventIds,
 * eventSchemaVersion, referenceId, and webhookUrl.
 *
 * https://developers.mindbodyonline.com/WebhooksDocumentation#patch-subscription
 */
async function updateSubscription(
  subscriptionID: string,
  args: WebhooksRequestsArgsPatch<UpdateSubscriptionPayload>,
): Promise<Subscription> {
  return await MINDBODY.patch(`/subscriptions/${subscriptionID}`, args);
}

/**
 * This endpoint deactivates a subscription associated with the passed ID.
 *
 * https://developers.mindbodyonline.com/WebhooksDocumentation#delete-subscription
 */
async function deleteSubscription(
  subscriptionID: string,
): Promise<DeactivatedSubscription> {
  return await MINDBODY.delete(`/subscriptions/${subscriptionID}`);
}

export default {
  getSubscriptions,
  getSubscription,
  createSubscription,
  updateSubscription,
  deleteSubscription,
};
