import type { Kv } from '$http/types/Kv';

export type WebhookEventBase<TEventData extends Kv> = {
  messageId: string;
  eventId: string;
  eventSchemaVersion: number;
  eventInstanceOriginationDate: string;
  eventData: TEventData;
};
