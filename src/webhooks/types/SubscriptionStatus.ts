export type SubscriptionStatus =
  | 'PendingActivation'
  | 'Active'
  | 'DeactivatedByUser'
  | 'DeactivatedByAdmin'
  | 'DeactivatedTooManyFailedMessageDeliveryAttempts'
  | 'DeactivatedByEventDeactivation';
