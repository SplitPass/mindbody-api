import type { QueryParams, RequestArgsGetOptionalParams } from '$http/types';
import type {
  Commissions,
  ScheduledServiceEarnings,
  Timecards,
  Tips,
} from '$mindbody/types';

import { MindbodyAPIClient } from '$http/MindbodyAPIClient';

const MINDBODY = MindbodyAPIClient.get();

// ========================
// GET /payroll/{endpoint}
// ========================

export type GetCommissionsQueryParams = QueryParams<{
  StaffId?: string;
  StartDateTime?: string;
  EndDateTime?: string;
  LocationId?: number;
}>;

/**
 * A staff authorization token is not required for this endpoint, but if one is passed,
 * its permissions are honored. Depending on the access permissions configured for
 * the staff member whose token is passed, the endpoint returns either only the
 * payroll information for that staff member or it returns the payroll information for all staff members.
 *
 * This endpoint returns information for all locations. The View reports for
 * all locations permission is not supported for staff auth tokens.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-commissions
 */
async function getCommissions(
  args: RequestArgsGetOptionalParams<GetCommissionsQueryParams>,
): Promise<Commissions> {
  return await MINDBODY.get('/payroll/commissions', args);
}

export type ScheduledServiceEarningsQueryParams = QueryParams<{
  ScheduledServiceType?: string;
  ScheduledServiceId?: number;
  StaffId?: string[];
  StartDateTime?: string;
  EndDateTime?: string;
  LocationID?: number;
}>;

/**
 * A staff authorization token is not required for this endpoint, but if one
 * is passed, its permissions are honored. Depending on the access permissions
 * configured for the staff member whose token is passed, the endpoint returns
 * either only the payroll information for that staff member or it returns the
 * payroll information for all staff members. This endpoint returns information
 * for all locations. The View reports for all locations permission is not supported
 * for staff auth tokens.
 *
 * Note that if a staff member is not paid for a class or appointment,
 * earnings of zero are returned by this endpoint.
 *
 * Note that this endpoint calculates both bonus and no-reg rates for class assistants.
 * These rates are not supported by the Payroll report in the web interface.
 *
 * Note that for classes, this endpoint returns both the teacher’s adjusted rate
 * and the assistant’s pay rate when the assistant is paid by the teacher.
 * The Payroll report in the web interface only returns the teacher’s adjusted rate.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-scheduled-service-earnings
 */
async function getScheduledServiceEarnings(
  args: RequestArgsGetOptionalParams<ScheduledServiceEarningsQueryParams>,
): Promise<ScheduledServiceEarnings> {
  return await MINDBODY.get('/payroll/scheduledserviceearnings', args);
}

export type GetTimeCardsQueryParams = QueryParams<{
  StaffId?: string;
  StartDateTime?: string;
  EndDateTime?: string;
  LocationId?: number;
}>;

/**
 * The View reports for all locations permission is not supported for staff auth tokens.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-time-cards
 */
async function getTimeCards(
  args: RequestArgsGetOptionalParams<GetTimeCardsQueryParams>,
): Promise<Timecards> {
  return await MINDBODY.get('/payroll/timecards', args);
}

export type GetTipsQueryParams = QueryParams<{
  StaffId?: string;
  StartDateTime?: string;
  EndDateTime?: string;
  LocationId?: number;
}>;

/**
 * A staff authorization token is not required for this endpoint, but if one
 * is passed, its permissions are honored. Depending on the access permissions
 * configured for the staff member whose token is passed, the endpoint returns
 * either only the payroll information for that staff member or it
 * returns the payroll information for all staff members.
 *
 * The View reports for all locations permission is not supported for staff auth tokens.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-tips
 */
async function getTips(
  args: RequestArgsGetOptionalParams<GetTipsQueryParams>,
): Promise<Tips> {
  return await MINDBODY.get('/payroll/tips', args);
}

export default {
  getCommissions,
  getScheduledServiceEarnings,
  getTimeCards,
  getTips,
};
