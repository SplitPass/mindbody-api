import type {
  QueryParams,
  RequestArgsGet,
  RequestArgsGetOptionalParams,
  RequestArgsPost,
} from '$http/types';
import type {
  AddStaffSessionType,
  Permissions,
  SalesReps,
  Staff,
  StaffImageURL,
  StaffMembers,
  StaffSessionTypes,
} from '$mindbody/types';
import type { MarkRequired } from 'ts-essentials';

import { MindbodyClient } from '$http/MindbodyClient';

const MINDBODY = MindbodyClient.get();

// ========================
// GET /staff/{endpoint}
// ========================

export type GetStaffQueryParams = QueryParams<{
  SessionTypeId?: number;
  StartDateTime?: string;
  EndDateTime?: string;
  StaffIds?: number[];
  LocationId?: number;
}>;

/**
 * When a user token is not passed with the request or the passed user token has
 * insufficient viewing permissions, only the following staff data is returned in the response:
 *
 * - FirstName
 * - LastName
 * - Id
 * - Bio
 * - DisplayName
 * - ImageUrl
 * - EmplID
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-staff
 */
export async function getStaff(
  args: RequestArgsGetOptionalParams<GetStaffQueryParams>,
): Promise<StaffMembers> {
  return await MINDBODY.get('/staff/staff', args);
}

export type GetStaffPermissionsQueryParams = QueryParams<{
  StaffId: number;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-staff-permissions
 */
export async function getStaffPermissions(
  args: RequestArgsGet<GetStaffPermissionsQueryParams>,
): Promise<Permissions> {
  return await MINDBODY.get('/staff/staffpermissions', args);
}

export type StaffImageURLQueryParams = QueryParams<{
  StaffId: number;
}>;

/**
 * This endpoint can be utilized to retrieve image urls for requested staff member.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-staff-image-url
 */
export async function getStaffImageURL(
  args: RequestArgsGet<StaffImageURLQueryParams>,
): Promise<StaffImageURL> {
  return await MINDBODY.get('/staff/imageurl', args);
}

export type StaffSessionTypesQueryParams = QueryParams<{
  StaffId: number;
  ProgramIds?: number[];
  OnlineOnly?: boolean;
}>;

/**
 * Gets a list of active session types for a specific staff member. A staff user
 * token must be included with staff assigned the ManageStaffPayRates permission.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-staff-session-types
 */
export async function getStaffSessionTypes(
  args: RequestArgsGet<StaffSessionTypesQueryParams>,
): Promise<StaffSessionTypes> {
  return await MINDBODY.get('/staff/sessiontypes', args);
}

export type SalesRepsQueryParams = QueryParams<{
  SalesRepNumbers: number[];
  ActiveOnly?: boolean;
}>;

/**
 * This endpoint returns the basic details of the staffs that are marked as sales reps.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-sales-reps
 */
export async function getSalesReps(
  args: RequestArgsGet<SalesRepsQueryParams>,
): Promise<SalesReps> {
  return await MINDBODY.get('/staff/salesreps', args);
}

// ========================
// POST /staff/{endpoint}
// ========================

export type AddStaffPayload = MarkRequired<
  Partial<Staff>,
  'FirstName' | 'LastName'
>;

/**
 * Creates a new staff member record at the specified business. The FirstName
 * and LastName parameters are always required for this request.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-staff
 */
export async function addStaff(
  args: RequestArgsPost<AddStaffPayload>,
): Promise<{ Staff: Staff }> {
  return await MINDBODY.post('/staff/addstaff', args);
}

export type AddStaffAvailabilityPayload = {
  StaffId: number;
  IsAvailability: boolean;
  Description: string;
  ProgramIds: number[];
  LocationId: number;
  DaysOfWeek?: (
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
  )[];
  StartDate: string;
  EndDate: string;
  StartTime: string;
  EndTime: string;
  Status?: 'Masked' | 'Hidden' | 'Public';
};

/**
 * Enables to add staff availability or unavailability for a given staff member.
 *
 * This endpoint does not return a response. If a call to this endpoint results
 * in a 200 OK HTTP status code, then the call was successful.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-staff-availability
 */
export async function addStaffAvailability(
  args: RequestArgsPost<AddStaffAvailabilityPayload>,
): Promise<void> {
  await MINDBODY.post('/staff/staffavailability', args);
}

export type AssignStaffSessionTypePayload = {
  StaffId: number;
  SessionTypeId: number;
  Active: boolean;
  TimeLength: number;
  PrepTime: number;
  FinishTime: number;
  PayRateType: 'Percent' | 'Flat' | 'No Pay';
  PayRateAmount: number;
};

/**
 * Assigns a staff member to an appointment session type with staff specific
 * properties such as time length and pay rate. A staff user token must be included
 * with staff assigned the ManageStaffPayRates permission.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#assign-staff-session-type
 */
export async function assignStaffSessionType(
  args: RequestArgsPost<AssignStaffSessionTypePayload>,
): Promise<AddStaffSessionType> {
  return await MINDBODY.post('/staff/assignsessiontype', args);
}

export type UpdateStaffPayload = MarkRequired<Partial<Staff>, 'Id'>;

/**
 * Updates an existing staff member record at the specified business.
 * The ID is a required parameters for this request.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#update-staff
 */
export async function updateStaff(
  args: RequestArgsPost<UpdateStaffPayload>,
): Promise<AddStaffSessionType> {
  return await MINDBODY.post('/staff/updatestaff', args);
}

export type UpdateStaffPermissionsPayload = {
  StaffId: number;
  PermissionGroupName: string;
};
/**
 * Assigns a permission group to a staff member. A staff user token must be included
 * with staff assigned the ManageStaffPayRates permission.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#update-staff-permissions
 */
export async function updateStaffPermissions(
  args: RequestArgsPost<UpdateStaffPermissionsPayload>,
): Promise<Permissions> {
  return await MINDBODY.post('/staff/updatestaffpermissions', args);
}
