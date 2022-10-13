import type {
  QueryParams,
  RequestArgsGetOptionalParams,
  RequestArgsPost,
} from '$http/types';
import type { AddClientToEnrollment, Enrollments } from '$mindbody/types';
import type { DeepReadonly } from '$types';

import { MindbodyClient } from '$http/MindbodyClient';

const MINDBODY = MindbodyClient.get();

// ========================
// GET /enrollment/{endpoint}
// ========================

export type GetEnrollmentsQueryParams = QueryParams<{
  ClassScheduleIds?: number[];
  StartDate?: string;
  EndDate?: string;
  LocationIds?: number[];
  ProgramIds?: number[];
  SessionTypeIds?: number[];
  StaffIds?: number[];
}>;

/**
 * Returns a list of enrollments. An enrollment is a service, such as a workshop
 * or an event, that a staff member offers to multiple students, who commit to
 * coming to all or most of the scheduled sessions.
 * Enrollments typically run for a limited time only.
 *
 * When a user token is not passed with the request or the passed user token has
 * insufficient viewing permissions, only the following staff data is returned in the response:
 *
 * - FirstName
 * - LastName
 * - Id
 * - Bio
 * - DisplayName
 * - ImageUrl
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-enrollments
 */
export async function getEnrollments(
  args: RequestArgsGetOptionalParams<GetEnrollmentsQueryParams>,
): Promise<Enrollments> {
  return await MINDBODY.get('/enrollment/enrollments', args);
}

// ========================
// POST /enrollment/{endpoint}
// ========================

export type AddClientToEnrollmentPayload = DeepReadonly<{
  ClientId: string;
  ClassScheduleId: string;
  EnrollDateForward?: string;
  EnrollOpen?: string[];
  SendEmail?: boolean;
  Waitlist?: boolean;
  WaitlistEntryId?: boolean;
  Test?: boolean;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-client-to-enrollment
 */
export async function addClientToEnrollment(
  args: RequestArgsPost<AddClientToEnrollmentPayload>,
): Promise<AddClientToEnrollment> {
  return await MINDBODY.post('/enrollment/addclienttoenrollment', args);
}
