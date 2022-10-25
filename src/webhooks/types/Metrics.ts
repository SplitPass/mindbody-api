export type Metrics = {
  items: Metric[];
};

export type Metric = {
  subscriptionId: string;
  status:
    | 'PendingActivation'
    | 'Active'
    | 'DeactivatedByUser'
    | 'DeactivatedByAdmin'
    | 'DeactivatedTooManyFailedMessageDeliveryAttempts'
    | 'DeactivatedByEventDeactivation';
  statusChangeDate: string;
  creationDateTime: string;
  messagesAttempted: number;
  messagesDelivered: number;
  messagesUndelivered: number;
  messagesFailed: number;
};
