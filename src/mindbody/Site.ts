import type {
  QueryParams,
  RequestArgsGet,
  RequestArgsGetOptionalParams,
  RequestArgsPost,
} from '$http/types';
import type {
  ActivationCode,
  Categories,
  GenderOptions,
  Locations,
  MobileProviders,
  PaymentTypes,
  Programs,
  PromoCode,
  PromoCodes,
  ProspectStages,
  Relationships,
  Resources,
  SessionTypes,
  Sites,
} from '$mindbody/types';
import type { MarkRequired } from 'ts-essentials';

import { MindbodyClient } from '$http/MindbodyClient';

const MINDBODY = MindbodyClient.get();

// ========================
// GET /site/{endpoint}
// ========================

/**
 * Before you can use this endpoint, Mindbody must approve your developer account
 * for live access. If you have finished testing in the sandbox and are ready to
 * begin working with Mindbody customers, log into your account and request to go live.
 * See Accessing Business Data From Mindbody for more information about the activation
 * code and how to use it. Once you are approved, this endpoint returns an activation
 * code. This endpoint supports only one site per call.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-activation-code
 */
async function getActivationCode(
  args: RequestArgsGetOptionalParams<never>,
): Promise<ActivationCode> {
  return await MINDBODY.get('/site/activationcode', args);
}

/**
 * The endpoint returns a list of configured client gender options for a site.
 * Custom gender options are assignable to client genders only. Currently, custom
 * values returned from this endpoint cannot be used as input for other endpoints
 * to specify the genders of staff or client preferences.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-genders
 */
async function getGenders(
  args: RequestArgsGetOptionalParams<never>,
): Promise<GenderOptions> {
  return await MINDBODY.get('/site/genders', args);
}

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-locations
 */
async function getLocations(
  args: RequestArgsGetOptionalParams<never>,
): Promise<Locations> {
  return await MINDBODY.get('/site/locations', args);
}

export type GetMembershipsQueryParams = QueryParams<{
  MembershipIds: number[];
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-memberships
 */
async function getMemberships(
  args: RequestArgsGet<GetMembershipsQueryParams>,
): Promise<Locations> {
  return await MINDBODY.get('/site/memberships', args);
}

export type GetProgramsQueryParams = QueryParams<{
  ScheduleType?:
    | 'All'
    | 'Class'
    | 'Enrollment'
    | 'Appointment'
    | 'Resource'
    | 'Media'
    | 'Arrival';
  OnlineOnly?: boolean;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-programs
 */
async function getPrograms(
  args: RequestArgsGetOptionalParams<GetProgramsQueryParams>,
): Promise<Programs> {
  return await MINDBODY.get('/site/programs', args);
}

export type GetPromoCodesQueryParams = QueryParams<{
  ActiveOnly?: boolean;
  OnlineOnly?: boolean;
  StartDate?: string;
  EndDate?: string;
}>;

/**
 * Gets a list of promocodes at the specified business. This endpoint requires
 * staff user credentials. This staff member should have enabled the Set up
 * promotions / Semester discounts staff permission.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-promocodes
 */
async function getPromoCodes(
  args: RequestArgsGetOptionalParams<GetPromoCodesQueryParams>,
): Promise<PromoCodes> {
  return await MINDBODY.get('/site/promocodes', args);
}

export type GetResourcesQueryParams = QueryParams<{
  SessionTypeIds?: number[];
  LocationId?: number;
  StartDateTime?: string;
  EndDateTime?: string;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-resources
 */
async function getResources(
  args: RequestArgsGetOptionalParams<GetResourcesQueryParams>,
): Promise<Resources> {
  return await MINDBODY.get('/site/resources', args);
}

export type GetSessionTypesQueryParams = QueryParams<{
  ProgramIds?: number[];
  OnlineOnly?: boolean;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-session-types
 */
async function getSessionTypes(
  args: RequestArgsGetOptionalParams<GetSessionTypesQueryParams>,
): Promise<SessionTypes> {
  return await MINDBODY.get('/site/sessiontypes', args);
}

export type GetSitesQueryParams = QueryParams<{
  SiteIds?: number[];
}>;

/**
 * Gets a list of sites that the developer has permission to view.
 *
 * - Passing in no site IDs returns all sites that the developer has access to.
 * - Passing in one site ID in SiteIds returns more detailed information about the specified site.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-sites
 */
async function getSites(
  args: RequestArgsGetOptionalParams<GetSitesQueryParams>,
): Promise<Sites> {
  return await MINDBODY.get('/site/sites', args);
}

export type GetCategoriesQueryParams = QueryParams<{
  CategoryIds?: number[];
  SubCategoryIds?: number[];
  Active?: boolean;
  Service?: boolean;
}>;

/**
 * Gets a list of sites that the developer has permission to view.
 *
 * - Passing in no site IDs returns all sites that the developer has access to.
 * - Passing in one site ID in SiteIds returns more detailed information about the specified site.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-categories
 */
async function getCategories(
  args: RequestArgsGetOptionalParams<GetCategoriesQueryParams>,
): Promise<Categories> {
  return await MINDBODY.get('/site/categories', args);
}

export type GetPaymentTypesQueryParams = QueryParams<{
  Active?: boolean;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-paymenttypes
 */
async function getPaymentTypes(
  args: RequestArgsGetOptionalParams<GetPaymentTypesQueryParams>,
): Promise<PaymentTypes> {
  return await MINDBODY.get('/site/paymenttypes', args);
}

export type GetRelationshipsQueryParams = QueryParams<{
  Active?: boolean;
}>;

/**
 * This endpoint retrieves the business site relationships.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-relationships
 */
async function getRelationships(
  args: RequestArgsGetOptionalParams<GetRelationshipsQueryParams>,
): Promise<Relationships> {
  return await MINDBODY.get('/site/relationships', args);
}

export type GetMobileProvidersQueryParams = QueryParams<{
  Active?: boolean;
}>;

/**
 * Get the list of mobile providers that are supported by the business.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-mobile-providers
 */
async function getMobileProviders(
  args: RequestArgsGetOptionalParams<GetMobileProvidersQueryParams>,
): Promise<MobileProviders> {
  return await MINDBODY.get('/site/mobileproviders', args);
}

export type GetProspectStagesQueryParams = QueryParams<{
  Active?: boolean;
}>;

/**
 * Get the list of prospect stages that represent the prospect stage options for prospective clients.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-prospect-stages
 */
async function getProspectStages(
  args: RequestArgsGetOptionalParams<GetProspectStagesQueryParams>,
): Promise<ProspectStages> {
  return await MINDBODY.get('/site/prospectstages', args);
}

// ========================
// POST /site/{endpoint}
// ========================

export type AddPromoCodePayload = MarkRequired<
  Partial<PromoCode>,
  'Name' | 'Code'
>;

/**
 * Creates a new promocode record at the specified business. This endpoint requires
 * staff user credentials. This staff memeber should have enabled the Set up
 * promotions / Semester discounts staff permission.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-promocode
 */
async function addPromoCode(
  args: RequestArgsPost<AddPromoCodePayload>,
): Promise<ProspectStages> {
  return await MINDBODY.post('/site/addpromocode', args);
}

export default {
  getActivationCode,
  getCategories,
  getGenders,
  getLocations,
  getMemberships,
  getMobileProviders,
  getPaymentTypes,
  getPrograms,
  getPromoCodes,
  getProspectStages,
  getRelationships,
  getResources,
  getSessionTypes,
  getSites,
  addPromoCode,
};
