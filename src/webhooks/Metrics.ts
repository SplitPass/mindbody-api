import type { Metrics } from '$webhooks/types';

import { MindbodyWebhooksClient } from '$http/MindbodyWebhooksClient';

const MINDBODY = MindbodyWebhooksClient.get();

/**
 * This endpoint gets metrics for all the subscriptions associated with your Public API developer account.
 *
 * https://developers.mindbodyonline.com/WebhooksDocumentation#get-metrics23
 */
async function getMetrics(): Promise<Metrics> {
  return await MINDBODY.get('/metrics');
}

export default { getMetrics };
