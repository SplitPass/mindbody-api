import type {
  QueryParams,
  RequestArgsDelete,
  RequestArgsGet,
  RequestArgsGetOptionalParams,
  RequestArgsPost,
} from '$http/types';
import type {
  AddOns,
  Appointment,
  AppointmentOptions,
  Appointments,
  Availabilities,
  Staff,
} from '$mindbody/types';
import type { DeepReadonly } from '$types';

import { MindbodyClient } from '$http/MindbodyClient';

const MINDBODY = MindbodyClient.get();

// ========================
// GET /appointment/{endpoint}
// ========================

export type GetActiveSessionTimesQueryParams = QueryParams<{
  ScheduleType?:
    | 'All'
    | 'Class'
    | 'Enrollment'
    | 'Appointment'
    | 'Resource'
    | 'Media'
    | 'Arrival';
  SessionTypeIds?: number[];
  StartTime?: string;
  EndTime?: string;
}>;

/**
 * This is not appointment availability but rather the active business hours for
 * studios and which increments services can be booked at.
 * See BookableItems for appointment availability.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#appointment-endpoint
 */
export async function getActiveSessionTimes(
  args: RequestArgsGetOptionalParams<GetActiveSessionTimesQueryParams>,
): Promise<DeepReadonly<{ ActiveSessionTimes: string[] }>> {
  return await MINDBODY.get('/appointment/activesessiontimes', args);
}

export type GetAppointmentAddOnsQueryParams = QueryParams<{
  StaffId?: string;
}>;

/**
 * Get active appointment add-ons.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-appointment-add-ons
 */
export async function getAppointmentAddOns(
  args: RequestArgsGetOptionalParams<GetAppointmentAddOnsQueryParams>,
): Promise<AddOns> {
  return await MINDBODY.get('/appointment/addons', args);
}

export type GetAppointmentAvailableDatesQueryParams = QueryParams<{
  SessionTypeId: string;
  LocationId?: number;
  StaffId?: number;
  StartDate?: string;
  EndDate?: string;
}>;

/**
 * Returns a list of dates to narrow down staff availability when booking. Dates
 * are those which staff are scheduled to work and do not guarantee booking
 * availabilities. After this call is made, use GET BookableItems to retrieve
 * availabilities for specific dates before booking.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-appointment-available-dates
 */
export async function getAppointmentAvailableDates(
  args: RequestArgsGet<GetAppointmentAvailableDatesQueryParams>,
): Promise<DeepReadonly<{ AvailableDates: string[] }>> {
  return await MINDBODY.get('/appointment/availabledates', args);
}

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-appointment-options
 */
export async function getAppointmentOptions(
  args: RequestArgsGetOptionalParams<never>,
): Promise<AppointmentOptions> {
  return await MINDBODY.get('/appointment/appointmentoptions', args);
}

export type GetBookableItemsQueryParams = QueryParams<{
  SessionTypeIds: number[];
  LocationIds?: number[];
  StaffIds?: number[];
  AppointmentId?: number;
  StartDate?: string;
  EndDate?: string;
}>;

/**
 * Returns a list of availabilities with the information needed to book appointments.
 * Availabilities include information such as the location and its amenities,
 * staff members, programs, and session types. Recommended to use with ActiveSessionTimes
 * to see which increments each business allows for booking appointments.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-bookable-items
 */
export async function getBookableItems(
  args: RequestArgsGet<GetBookableItemsQueryParams>,
): Promise<Availabilities> {
  return await MINDBODY.get('/appointment/bookableitems', args);
}

export type GetScheduleItemsQueryParams = QueryParams<{
  LocationIds?: number[];
  StaffIds?: number[];
  StartDate?: string;
  EndDate?: string;
  IgnorePrepFinishTimes?: boolean;
}>;

/**
 * Returns a list of schedule items, including appointments, availabilities, and
 * unavailabilities. Unavailabilities are the times at which appointments cannot
 * be booked, for example, on holidays or after hours when the business is closed.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-schedule-items
 */
export async function getScheduleItems(
  args: RequestArgsGetOptionalParams<GetScheduleItemsQueryParams>,
): Promise<DeepReadonly<{ StaffMembers: Staff[] }>> {
  return await MINDBODY.get('/appointment/scheduleitems', args);
}

export type GetStaffAppointmentsQueryParams = QueryParams<{
  AppointmentIds?: number[];
  LocationIds?: number[];
  StaffIds?: number[];
  StartDate?: string;
  EndDate?: string;
  ClientId?: string;
}>;

/**
 * Returns a list of appointments by staff member.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-staff-appointments
 */
export async function getStaffAppointments(
  args: RequestArgsGetOptionalParams<GetStaffAppointmentsQueryParams>,
): Promise<Appointments> {
  return await MINDBODY.get('/appointment/staffappointments', args);
}

// ========================
// POST /appointment/{endpoint}
// ========================

export type AddAppointmentPayload = DeepReadonly<{
  ClientId: string;
  LocationId: number;
  SessionTypeId: number;
  StaffId: number;
  StartDateTime: string;
  EndDateTime?: string;
  ApplyPayment?: boolean;
  Duration?: number;
  Execute?: string;
  GenderPreference: 'None' | 'Female' | 'Male';
  Notes?: string;
  ProviderId?: string;
  ResourceIds?: number[];
  SendEmail?: boolean;
  StaffRequested?: boolean;
  IsWaitlist?: boolean;
  Test?: boolean;
}>;

/**
 * A user token is required for this endpoint. To book an appointment, you must
 * use a location ID, staff ID, client ID, session type ID, and the StartDateTime
 * of the appointment. You can get most of this information using GET BookableItems.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-appointment
 */
export async function addAppointment(
  args: RequestArgsPost<AddAppointmentPayload>,
): Promise<Appointments> {
  return await MINDBODY.post('/appointment/addappointment', args);
}

export type AddAppointmentAddOnPayload = DeepReadonly<{
  AppointmentId: number;
  SessionTypeId: number;
  StaffId: number;
  ApplyPayment?: boolean;
  Test?: boolean;
}>;

/**
 * This endpoint books an add-on on top of an existing, regular appointment.
 * To book an add-on, you must use an existing appointment ID and session type ID.
 * You can get a session type ID using GET AppointmentAddOns.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-appointment-addon
 */
export async function addAppointmentAddOn(
  args: RequestArgsPost<AddAppointmentAddOnPayload>,
): Promise<
  DeepReadonly<{
    AppointmentId: number;
    AddOnAppointmentId: number;
  }>
> {
  return await MINDBODY.post('/appointment/addappointmentaddon', args);
}

export type UpdateAppointmentPayload = DeepReadonly<{
  AppointmentId: number;
  Execute?: string;
  GenderPreference?: 'None' | 'Female' | 'Male';
  Notes?: string;
  ProviderId?: string;
  ResourceIds?: number[];
  SendEmail?: boolean;
  SessionTypeId?: number;
  StaffId?: number;
  StartDateTime?: string;
  EndDateTime?: string;
  Test?: boolean;
}>;

/**
 * To update the information for a specific appointment, you must have a staff user
 * token with the proper permissions. Note that you can only update the appointment’s
 * StartDateTime, EndDateTime, StaffId, Notes, and SessionTypeId.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#update-appointment
 */
export async function updateAppointment(
  args: RequestArgsPost<UpdateAppointmentPayload>,
): Promise<DeepReadonly<{ Appointment: Appointment }>> {
  return await MINDBODY.post('/appointment/updateappointment', args);
}

export type AddAvailabilitiesPayload = DeepReadonly<{
  StaffIDs?: number[];
  IsUnavailable?: boolean;
  PublicDisplay?: 'Show' | 'Mask' | 'Hide';
  DaysOfWeek?: (
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
  )[];
  LocationID?: number;
  ProgramIDs?: number[];
  StartDateTime?: string;
  EndDateTime?: string;
  UnavailableDescription?: string;
  Test?: boolean;
}>;

/**
 * Add availabilities and unavailabilities for a staff member.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-availabilities
 */
export async function addAvailabilities(
  args: RequestArgsPost<AddAvailabilitiesPayload>,
): Promise<DeepReadonly<{ StaffMembers: Staff[] }>> {
  return await MINDBODY.post('/appointment/availabilities', args);
}

// ========================
// PUT /appointment/{endpoint}
// ========================

export type UpdateAvailabilitiesPayload = DeepReadonly<{
  AvailabilityIds: number[];
  PublicDisplay?: 'Show' | 'Mask' | 'Hide';
  DaysOfWeek?: (
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
  )[];
  LocationID?: number;
  ProgramIDs?: number[];
  StartDateTime?: string;
  EndDateTime?: string;
  UnavailableDescription?: string;
  Test?: boolean;
}>;

/**
 * Add availabilities and unavailabilities for a staff member.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-availabilities
 */
export async function updateAvailabilities(
  args: RequestArgsPost<UpdateAvailabilitiesPayload>,
): Promise<DeepReadonly<{ StaffMembers: Staff[] }>> {
  return await MINDBODY.put('/appointment/availabilities', args);
}

// ========================
// DELETE /appointment/{endpoint}
// ========================

export type DeleteAppointmentAddOnQueryParams = DeepReadonly<{
  Id: number;
}>;

/**
 * This endpoint can be used to early-cancel a booked appointment add-on.
 * This endpoint does not return a response. If a call to this endpoint results
 * in a 204 No Content HTTP status code, then the call was successful.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#delete-appointment-addon
 */
export async function deleteAppointmentAddOn(
  args: RequestArgsDelete<DeleteAppointmentAddOnQueryParams>,
): Promise<void> {
  await MINDBODY.delete('/appointment/deleteappointmentaddon', args);
}

export type DeleteAvailabilityQueryParams = DeepReadonly<{
  AvailabilityId: number;
  Test?: boolean;
}>;

/**
 * This endpoint deletes the availability or unavailability.
 * This endpoint does not return a response. If a call to this endpoint results
 * in a 204 No Content HTTP status code, then the call was successful.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#delete-availability
 */
export async function deleteAvailability(
  args: RequestArgsDelete<DeleteAvailabilityQueryParams>,
): Promise<void> {
  await MINDBODY.delete('/appointment/availability', args);
}

export type RemoveFromAppointmentWaitlistQueryParams = DeepReadonly<{
  AvailabilityId: number;
  Test?: boolean;
}>;

/**
 * This endpoint does not return a response. If a call to this endpoint results
 * in a 204 No Content HTTP status code, then the call was successful.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#remove-from-appointment-waitlist
 */
export async function removeFromAppointmentWaitlist(
  args: RequestArgsDelete<RemoveFromAppointmentWaitlistQueryParams>,
): Promise<void> {
  await MINDBODY.delete('/appointment/removefromappointmentwaitlist', args);
}
