export type EventType =
  | 'site.created'
  | 'site.updated'
  | 'site.deactivated'
  | 'siteBusinessDayClosure.created'
  | 'siteBusinessDayClosure.cancelled'
  | 'location.created'
  | 'location.updated'
  | 'location.deactivated'
  | 'appointmentBooking.created'
  | 'appointmentBooking.updated'
  | 'appointmentBooking.cancelled'
  | 'appointmentAddOn.created'
  | 'appointmentAddOn.deleted'
  | 'classSchedule.created'
  | 'classSchedule.updated'
  | 'classSchedule.cancelled'
  | 'class.updated'
  | 'classRosterBooking.created'
  | 'classRosterBooking.cancelled'
  | 'classRosterBookingStatus.updated'
  | 'classWaitlistRequest.created'
  | 'classWaitlistRequest.cancelled'
  | 'client.created'
  | 'client.updated'
  | 'client.deactivated'
  | 'clientProfileMerger.created'
  | 'clientMembershipAssignment.created'
  | 'clientMembershipAssignment.cancelled'
  | 'clientContract.created'
  | 'clientContract.updated'
  | 'clientContract.cancelled'
  | 'clientSale.created'
  | 'staff.created'
  | 'staff.updated'
  | 'staff.deactivated';
