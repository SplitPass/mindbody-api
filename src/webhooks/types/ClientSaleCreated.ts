import type { Nullable } from '$types';
import type { WebhookEventBase } from '$webhooks/types';

export type ClientSaleCreated = WebhookEventBase<{
  siteId: number;
  saleId: number;
  purchasingClientId: string;
  payments: {
    paymentId: number;
    paymentMethodId: number;
    paymentMethodName: string;
    paymentAmountPaid: number;
    paymentLastFour: Nullable<string>;
    paymentNotes: Nullable<string>;
  }[];
  saleDateTime: string;
  soldById: number;
  soldByName: string;
  locationId: number;
  totalAmountPaid: number;
  items: {
    itemId: number;
    type: string;
    name: string;
    amountPaid: number;
    amountDiscounted: number;
    quantity: number;
    recipientClientId: string;
    paymentReferenceId: number;
  }[];
}>;
