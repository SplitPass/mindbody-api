import type {
  PaginatedResponse,
  QueryParams,
  RequestArgsDelete,
  RequestArgsGet,
  RequestArgsGetOptionalParams,
  RequestArgsPost,
} from '$http/types';
import type {
  ActiveClientMemberships,
  AddContactLog,
  Client,
  ClientCompleteInfo,
  ClientContracts,
  ClientDuplicates,
  ClientIndexes,
  Clients,
  ClientsMemberships,
  ClientPurchases,
  ClientRewards,
  ClientService,
  ClientServices,
  ClientVisits,
  ContactLogs,
  CrossRegionalClientAssociations,
  CustomClientFields,
  DirectDebitInfo,
  FormulaNotes,
  ReferralTypes,
  RequiredClientFields,
  UpdatedClientRewards,
  UpdatedContactLog,
  Visit,
} from '$mindbody/types';
import type { MarkRequired } from 'ts-essentials';

import { MindbodyAPIClient } from '$http/MindbodyAPIClient';

const MINDBODY = MindbodyAPIClient.get();

// ========================
// GET /client/{endpoint}
// ========================

export type GetActiveClientMembershipsQueryParams = QueryParams<{
  ClientId: string;
  LocationId?: number;
  CrossRegionalLookup?: boolean;
  ClientAssociatedSitesOffset?: number;
}>;

/**
 * Please note that client memberships with location restrictions can only be
 * used to pay for scheduled services at the site to which they belong.
 * Memberships with location restrictions can not be used to pay
 * for scheduled services at other sites within an organization.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-active-client-memberships
 */
async function getActiveClientMemberships(
  args: RequestArgsGet<GetActiveClientMembershipsQueryParams>,
): Promise<PaginatedResponse<ActiveClientMemberships>> {
  return await MINDBODY.getPaginated('/client/activeclientmemberships', {
    ...args,
    objectIndexKey: 'ClientMemberships',
  });
}

export type GetActiveClientsMembershipsQueryParams = QueryParams<{
  ClientIds: string[];
  LocationId?: number;
  CrossRegionalLookup?: boolean;
  ClientAssociatedSitesOffset?: number;
}>;

/**
 * The endpoint returns a list of memberships for multiple clients we pass in query parameter.
 * Please note that clients memberships with location restrictions can only be used
 * to pay for scheduled services at the site to which they belong.
 * Memberships with location restrictions can not be used to pay
 * for scheduled services at other sites within an organization.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-active-clients-memberships
 */
async function getActiveClientsMemberships(
  args: RequestArgsGet<GetActiveClientsMembershipsQueryParams>,
): Promise<PaginatedResponse<ClientsMemberships>> {
  return await MINDBODY.getPaginated('/client/activeclientsmemberships', {
    ...args,
    objectIndexKey: 'ClientMemberships',
  });
}

export type GetClientAccountBalancesQueryParams = QueryParams<{
  ClientIds: string[];
  ClassId?: number;
  BalanceDate?: string;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-account-balances
 */
async function getClientAccountBalances(
  args: RequestArgsGet<GetClientAccountBalancesQueryParams>,
): Promise<PaginatedResponse<Clients>> {
  return await MINDBODY.getPaginated('/client/clientaccountbalances', {
    ...args,
    objectIndexKey: 'Clients',
  });
}

export type GetContactLogsQueryParams = QueryParams<{
  ClientId: string;
  StartDate?: string;
  EndDate?: string;
  StaffIds?: number[];
  ShowSystemGenerated?: boolean;
  TypeIds?: number[];
  SubtypeIds?: number[];
}>;

/**
 * This endpoint contains a variety of filters that can return not just all contact logs,
 * but also system-generated contact logs, contact logs assigned to specific staff members,
 * and contact logs of specific types or subtypes.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-contact-logs
 */
async function getContactLogs(
  args: RequestArgsGet<GetContactLogsQueryParams>,
): Promise<PaginatedResponse<ContactLogs>> {
  return await MINDBODY.getPaginated('/client/contactlogs', {
    ...args,
    objectIndexKey: 'ContactLogs',
  });
}

export type GetClientContractsQueryParams = QueryParams<{
  ClientId: string;
  CrossRegionalLookup?: boolean;
  ClientAssociatedSitesOffset?: boolean;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-contracts
 */
async function getClientContracts(
  args: RequestArgsGet<GetClientContractsQueryParams>,
): Promise<PaginatedResponse<ClientContracts>> {
  return await MINDBODY.getPaginated('/client/clientcontracts', {
    ...args,
    objectIndexKey: 'Contracts',
  });
}

export type ClientDirectDebitInfoQueryParams = QueryParams<{
  ClientId: string;
}>;

/**
 * This endpoint returns direct debit info stored on a client’s account.
 * This endpoint requires staff user credentials. A null response from this endpoint indicates
 * that the client has no usable direct debit information on their account.
 * Use the POST AddClientDirectDebitInfo endpoint to add direct debit information to a client’s account.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-ddinfo
 */
async function getClientDirectDebitInfo(
  args: RequestArgsGet<ClientDirectDebitInfoQueryParams>,
): Promise<DirectDebitInfo> {
  return await MINDBODY.get('/client/clientdirectdebitinfo', args);
}

export type ClientDuplicatesQueryParams = QueryParams<{
  FirstName: string;
  LastName: string;
  Email: string;
}>;

/**
 * This endpoint gets client records that would be considered duplicates based
 * on case-insensitive matching of the client’s first name, last name, and email.
 * For there to be results, all three parameters must match a client record.
 * This endpoint requires staff user credentials.
 *
 * An empty ClientDuplicates object in the response from this endpoint indicates
 * that there were no client records found that match the first name, last name, and email fields passed in.
 *
 * If one client record is returned, it is not a duplicate itself, but no other client record
 * can be created or updated that would match this client’s first name, last name, and email combination.
 *
 * If more than one client record is returned, these clients are duplicates of each other.
 * We recommend discussing with the business how they would like to resolve duplicate records
 * in the event the response contains more than one client record.
 * Businesses can use the Merge Duplicate Clients tool in the Core Business Mode software
 * to resolve the duplicate client records.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-duplicates
 */
async function getClientDuplicates(
  args: RequestArgsGet<ClientDuplicatesQueryParams>,
): Promise<PaginatedResponse<ClientDuplicates>> {
  return await MINDBODY.getPaginated('/client/clientduplicates', {
    ...args,
    objectIndexKey: 'ClientDuplicates',
  });
}

export type ClientFormulaNotesQueryParams = QueryParams<{
  ClientId?: string;
  AppointmentId?: number;
}>;

/**
 * Enables to retrieve cross regional formula notes for a client, or for a specific appointment.
 * The two parameters are optional, however at least one must be provided.
 * This endpoint supports pagination. See Pagination for a description of the Pagination information.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#client-formula-notes
 */
async function getClientFormulaNotes(
  args: RequestArgsGet<ClientFormulaNotesQueryParams>,
): Promise<FormulaNotes> {
  return await MINDBODY.get('/client/clientformulanotes', args);
}

export type ClientIndexesQueryParams = QueryParams<{
  RequiredOnly?: boolean;
}>;

/**
 * Client indexes are used to analyze client demographics. A business owner can set up
 * different categories with sets of values which they can assign to each client.
 * Client indexes are used in client searches, for tagging clients so that the owner
 * can send mass emails to similar groups, and for many reports.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-indexes
 */
async function getClientIndexes(
  args: RequestArgsGet<ClientIndexesQueryParams>,
): Promise<ClientIndexes> {
  return await MINDBODY.get('/client/clientindexes', args);
}

export type ClientPurchasesQueryParams = QueryParams<{
  ClientId: string;
  StartDate?: string;
  EndDate?: string;
  SaleId?: string;
}>;

/**
 * Gets a list of purchases made by a specific client.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-purchases
 */
async function getClientPurchases(
  args: RequestArgsGet<ClientPurchasesQueryParams>,
): Promise<PaginatedResponse<ClientPurchases>> {
  return await MINDBODY.getPaginated('/client/clientpurchases', {
    ...args,
    objectIndexKey: 'Purchases',
  });
}

export type ClientReferralTypesQueryParams = QueryParams<{
  IncludeInactive?: boolean;
}>;

/**
 * Gets a list of referral types. Referral types are options that new clients can choose
 * to identify how they learned about the business.
 * Referral types are typically used for the sign-up process.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-referral-types
 */
async function getClientReferralTypes(
  args: RequestArgsGetOptionalParams<ClientReferralTypesQueryParams>,
): Promise<ReferralTypes> {
  return await MINDBODY.get('/client/clientreferraltypes', args);
}

export type ClientRewardsQueryParams = QueryParams<{
  ClientId: string;
  StartDate?: string;
  EndDate?: string;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-rewards
 */
async function getClientRewards(
  args: RequestArgsGet<ClientRewardsQueryParams>,
): Promise<PaginatedResponse<ClientRewards>> {
  return await MINDBODY.getPaginated('/client/clientrewards', {
    ...args,
    objectIndexKey: 'Transactions',
  });
}

export type GetClientsQueryParams = QueryParams<{
  ClientIds?: string[];
  SearchText?: string;
  UniqueIds?: number[];
  IsProspect?: boolean;
  LastModifiedDate?: string;
  IncludeInactive?: boolean;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-clients
 */
async function getClients(
  args: RequestArgsGetOptionalParams<GetClientsQueryParams>,
): Promise<PaginatedResponse<Clients>> {
  return await MINDBODY.getPaginated('/client/clients', {
    ...args,
    objectIndexKey: 'Clients',
  });
}

export type GetClientCompleteInfoQueryParams = QueryParams<{
  ClientId: string;
  StartDate?: string;
  EndDate?: string;
  CrossRegionalLookup?: boolean;
  ClientAssociatedSitesOffset?: number;
  RequiredClientData?: string[];
}>;

/**
 * This endpoint returns complete client information along with list of purchased services,
 * contract details, membership details and arrival programs for a specific client.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-clientcompleteinfo
 */
async function getClientCompleteInfo(
  args: RequestArgsGet<GetClientCompleteInfoQueryParams>,
): Promise<ClientCompleteInfo> {
  return await MINDBODY.get('/client/clientcompleteinfo', args);
}

export type GetClientServicesQueryParams = QueryParams<{
  ClientId: string;
  ProgramIds?: number[];
  SessionTypeId?: number;
  LocationIds?: number[];
  VisitCount?: number;
  StartDate?: string;
  EndDate?: string;
  ShowActiveOnly?: boolean;
  CrossRegionalLookup?: boolean;
  ClientAssociatedSitesOffset?: number;
}>;

/**
 * Gets the purchased services for a specific client.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-services
 */
async function getClientServices(
  args: RequestArgsGet<GetClientServicesQueryParams>,
): Promise<PaginatedResponse<ClientServices>> {
  return await MINDBODY.getPaginated('/client/clientservices', {
    ...args,
    objectIndexKey: 'ClientServices',
  });
}

export type GetClientVisitsQueryParams = QueryParams<{
  ClientId: string;
  ClientAssociatedSitesOffset?: number;
  CrossRegionalLookup?: boolean;
  StartDate?: string;
  EndDate?: string;
  UnpaidsOnly?: boolean;
}>;

/**
 * Gets the Client Visits for a specific client.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-visits
 */
async function getClientVisits(
  args: RequestArgsGet<GetClientVisitsQueryParams>,
): Promise<PaginatedResponse<ClientVisits>> {
  return await MINDBODY.getPaginated('/client/clientvisits', {
    ...args,
    objectIndexKey: 'Visits',
  });
}

export type GetClientSchedulesQueryParams = QueryParams<{
  ClientId: string;
  ClientAssociatedSitesOffset?: number;
  CrossRegionalLookup?: boolean;
  StartDate?: string;
  EndDate?: string;
}>;

/**
 * This endpoint can be utilized to retrieve scheduled visits which is associated with the requested client.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-client-schedule
 */
async function getClientSchedule(
  args: RequestArgsGet<GetClientSchedulesQueryParams>,
): Promise<ClientVisits> {
  return await MINDBODY.get('/client/clientschedule', args);
}

export type CrossRegionalClientAssociationsQueryParams = QueryParams<{
  ClientId?: string;
  Email?: string;
}>;

/**
 * Returns a list of sites that a particular client ID (also referred to as an RSSID)
 * or a client email address is associated with in a cross-regional organization.
 * Either the ClientID or Email parameter is required. If both are provided, the ClientID is used.
 * Use this endpoint to retrieve information for other Public API endpoints,
 * about the same client at multiple sites within an organization.
 * To use this endpoint, your developer account must have been granted permission to the site’s entire organization.
 *
 * Note that this endpoint does not work on the Developer Sandbox site,
 * as it is not set up for cross-regional use cases.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-cross-regional-client-associations
 */
async function getCrossRegionalClientAssociations(
  args: RequestArgsGet<CrossRegionalClientAssociationsQueryParams>,
): Promise<PaginatedResponse<CrossRegionalClientAssociations>> {
  return await MINDBODY.getPaginated(
    '/client/crossregionalclientassociations',
    {
      ...args,
      objectIndexKey: 'CrossRegionalClientAssociations',
    },
  );
}

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-custom-client-fields
 */
async function getCustomClientFields(
  args: RequestArgsGetOptionalParams<never>,
): Promise<PaginatedResponse<CustomClientFields>> {
  return await MINDBODY.getPaginated('/client/customclientfields', {
    ...args,
    objectIndexKey: 'CustomClientFields',
  });
}

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-required-client-fields
 */
async function getRequiredClientFields(
  args: RequestArgsGetOptionalParams<never>,
): Promise<RequiredClientFields> {
  return await MINDBODY.get('/client/requiredclientfields', args);
}

export type ContactLogTypesQueryParams = QueryParams<{
  contactLogTypeId?: number;
}>;

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#get-contactlogtypes
 */
async function getContactLogTypes(
  args: RequestArgsGetOptionalParams<ContactLogTypesQueryParams>,
): Promise<PaginatedResponse<ContactLogs>> {
  return await MINDBODY.getPaginated('/client/contactlogtypes', {
    ...args,
    objectIndexKey: 'ContactLogTypes',
  });
}

// ------------------------
// POST /client/{endpoint}
// ------------------------

export type AddArivalPayload = {
  ClientId: string;
  LocationId: number;
  ArrivalTypeId?: number;
  Test?: boolean;
};

/**
 * Marks a client as arrived for a specified location. A staff user token must
 * be included with staff assigned the LaunchSignInScreen permission. When used
 * on a site that is part of a region, the following additional logic will apply:
 *
 * - When a client exists within the region but not at the studio where the arrival is being logged,
 *   a local client record will be automatically created.
 * - If the local client does not have an applicable local membership or pricing option,
 *   a membership or pricing option will be automatically used if it exists elsewhere within the region.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-arrival
 */
async function addArival(args: RequestArgsPost<AddArivalPayload>): Promise<{
  ArrivalAdded: boolean;
  ClientService: ClientService;
}> {
  return await MINDBODY.post('/client/addarrival', args);
}

export type AddClientPayload = MarkRequired<
  Partial<Client>,
  'FirstName' | 'LastName'
>;

/**
 * Creates a new client record at the specified business. Passing a User Token
 * as Authorization will create a client and respect Business Mode required fields.
 * Omitting the token will create a client and respect Consumer Mode required fields.
 * To make sure you are collecting all required pieces of information, first run
 * GetRequired ClientFields. If you have purchased an Ultimate tier then this endpoint
 * will automatically start showing new opportunity on Sales Pipeline.
 *
 * The FirstName and LastName parameters are always required in this request.
 * All other parameters are optional, but note that any of the optional parameters
 * could be required by a particular business, depending on how the business
 * has configured the site settings. If GetRequiredClientFields returns EmergContact
 * in the list of required fields, then all emergency contact parameters are required,
 * which includes EmergencyContactInfoEmail, EmergencyContactInfoName,
 * EmergencyContactInfoPhone, and EmergencyContactInfoRelationship.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-client
 */
async function addClient(
  args: RequestArgsPost<AddClientPayload>,
): Promise<{ Client: Client }> {
  return await MINDBODY.post('/client/addclient', args);
}

export type AddClientDirectDebitInfoPayload = {
  ClientId: string;
  Test?: boolean;
} & DirectDebitInfo;

/**
 * This endpoint adds direct debit info to a client’s account. This endpoint requires staff user credentials.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-client-ddinfo
 */
async function addClientDirectDebitInfo(
  args: RequestArgsPost<AddClientDirectDebitInfoPayload>,
): Promise<{ ClientId: string } & DirectDebitInfo> {
  return await MINDBODY.post('/client/addclientdirectdebitinfo', args);
}

export type AddClientFormulaNotePayload = {
  ClientId: string;
  Note: string;
  AppointmentId?: number;
};

/**
 * This endpoint adds a formula note for a specified client or specified client appointment.
 * A staff user token must be included with staff assigned permission to view client profile
 * or have both ViewAppointmentDetails and ModifyAppointment permissions.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-client-formula-note
 */
async function addClientFormulaNote(
  args: RequestArgsPost<AddClientFormulaNotePayload>,
): Promise<{
  Id: string;
  AppointmentId: string;
  EntryDate: string;
  Note: string;
  SiteId: number;
  SiteName: string;
}> {
  return await MINDBODY.post('/client/addclientformulanote', args);
}

export type AddContactLogPayload = {
  ClientId: string;
  AssignedToStaffId: number;
  Text: string;
  FollowUpByDate: string;
  ContactMethod: string;
  ContactName: string;
  IsComplete: boolean;
  Comments: string[];
  Types: {
    Id: number;
    SubTypes: number[];
  }[];
  Test?: boolean;
};

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#add-contact-log
 */
async function addContactLog(
  args: RequestArgsPost<AddContactLogPayload>,
): Promise<{ AddedContactLog: AddContactLog }> {
  return await MINDBODY.post('/client/addcontactlog', args);
}

export type SendAutoEmailPayload = {
  ClientId: string;
  EmailType: 'BusinessWelcomeEmail' | 'ConsumerWelcomeEmail';
};

/**
 * This endpoint requires staff user credentials.
 *
 * This endpoint causes auto email to be sent to the requested client.
 * Email type passed in request needs to be enabled in the core software.
 * This endpoint does not return a response. If a call to this endpoint results
 * in a 200 OK HTTP status code, then the call was successful.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#send-auto-email
 */
async function sendAutoEmail(
  args: RequestArgsPost<SendAutoEmailPayload>,
): Promise<void> {
  await MINDBODY.post('/client/sendautoemail', args);
}

export type SendPasswordResetEmailPayload = {
  UserEmail: string;
  UserFirstName: string;
  UserLastName: string;
};

/**
 * This endpoint causes an email to be sent to the requested user. It does not return a response.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#send-password-reset-email
 */
async function sendPasswordResetEmail(
  args: RequestArgsPost<SendPasswordResetEmailPayload>,
): Promise<void> {
  await MINDBODY.post('/client/sendpasswordresetemail', args);
}

export type TerminateContractPayload = {
  ClientId: string;
  ClientContractId: number;
  TerminateDate: string;
  TerminationCode?: string;
  TerminationComments?: string;
};

/**
 * This endpoint terminates a client contract. This endpoint requires staff
 * user credentials with TerminateClientContract permission.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#send-password-reset-email
 */
async function terminateContract(
  args: RequestArgsPost<TerminateContractPayload>,
): Promise<{ Message: string }> {
  return await MINDBODY.post('/client/terminatecontract', args);
}

export type UpdateClientPayload = {
  Client: Partial<Client>;
  CrossRegionalUpdate?: boolean;
  NewId?: string;
  Text?: boolean;
};

/**
 * Updates an existing client for a specific subscriber. Passing a User Token
 * as Authorization respects Business Mode required fields. Omitting the token
 * respects Consumer Mode required fields. To make sure you are collecting all
 * required pieces of information, first run GetRequiredClientFields.. Use this endpoint as follows:
 *
 * - If you need to update the ReferredBy parameter, use this endpoint after calling GET ClientReferralTypes.
 * - When updating a client’s home location, use after calling GET Locations.
 * - If you are updating a client’s stored credit card, use after calling
 *   GET AcceptedCardTypes so that you can make sure the card is a type that is accepted at the subscribe
 *
 * If this endpoint is used on a cross-regional site, passing in a client’s RSSID
 * and email address creates a cross-regional link. This means that the client is
 * created in cross-regional sites where the client does not exist and
 * GET CrossRegionalClientAssociations returns all appropriate cross-regional sites.
 * When CrossRegionalUpdate is omitted or set to true, the client’s updated information
 * is propagated to all of the region’s sites. If CrossRegionalUpdate is set to false,
 * only the local client is updated.
 *
 * Note that the following items cannot be updated for a cross-regional client:
 *
 * - ClientIndexes
 * - ClientRelationships
 * - CustomClientFields
 * - SalesReps
 * - SendAccountEmails
 * - SendAccountTexts
 * - SendPromotionalEmails
 * - SendPromotionalTexts
 * - SendScheduleEmails
 * - SendScheduleTexts
 * - Gender (for site custom values)
 *
 * Custom client Gender options can only be created with non-cross-regional requests.
 *
 * If you have purchased an Ultimate tier then this endpoint will automatically start
 * showing a new opportunity on Sales Pipeline. It will create a new opportunity if
 * the current request modify the contact as follows:
 *
 * - You need to update the IsProspect parameter to true.
 * - You need to update the ProspectStage.Description parameter to New Lead.
 *
 * Updates made to any inactive clients will automatically reactivate the client
 * unless the Acive property is explicitly set to false in the request body.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#update-client
 */
async function updateClient(
  args: RequestArgsPost<UpdateClientPayload>,
): Promise<{ Client: Client }> {
  return await MINDBODY.post('/client/updateclient', args);
}

export type UpdateClientRewardsPayload = {
  ClientId: string;
  Action: 'Earned' | 'Redeemed';
  Points: number;
  Source: 'Appointment Booking' | 'Class Booking' | 'Referral' | 'Sale';
  SourceID?: number;
  ActionDateTime?: string;
};

/**
 * Earns or redeems rewards points for a given client, based on site settings.
 * Cross regional rewards are not supported at this time.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#update-client-rewards
 */
async function updateClientRewards(
  args: RequestArgsPost<UpdateClientRewardsPayload>,
): Promise<UpdatedClientRewards> {
  return await MINDBODY.post('/client/clientrewards', args);
}

export type UpdateClientServicePayload = {
  ServiceId: string;
  ActiveDate?: string;
  ExpirationDate?: string;
  Count?: number;
  Test?: boolean;
};

/**
 * Updates the active date and/or expiration date of a client pricing option.
 * This request requires staff user credentials. If the active date is modified,
 * the expiration date is also modified accordingly.
 * If the expiration date is modified, the active date is unchanged.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#update-client-service
 */
async function updateClientService(
  args: RequestArgsPost<UpdateClientServicePayload>,
): Promise<{ ClientService: ClientService }> {
  return await MINDBODY.post('/client/updateclientservice', args);
}

export type UpdateClientVisitPayload = {
  VisitId: string;
  MakeUp: boolean;
  SignedIn: boolean;
  Execute?: 'Cancel' | 'LateCancel' | 'Unlatecancel';
  Test?: boolean;
  SendEmail?: boolean;
};

/**
 * Updates the status of the specified visit.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#update-client-visit
 */
async function updateClientVisit(
  args: RequestArgsPost<UpdateClientVisitPayload>,
): Promise<{ Visit: Visit }> {
  return await MINDBODY.post('/client/updateclientvisit', args);
}

export type UpdateContactLogPayload = {
  Id: number;
  AssignedToStaffId: number;
  Text: string;
  ContactName: string;
  FollowupByDate: string;
  ContactMethod: string;
  IsComplete: boolean;
  Comments: {
    Id: number;
    Text: string;
  }[];
  Types: {
    Id: number;
    SubTypes: number[];
  }[];
  Test?: boolean;
};

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#update-contact-log
 */
async function updateContactLog(
  args: RequestArgsPost<UpdateContactLogPayload>,
): Promise<{ UpdatedContactLog: UpdatedContactLog }> {
  return await MINDBODY.post('/client/updatecontactlog', args);
}

export type UploadClientDocumentPayload = {
  ClientId: string;
  File: {
    FileName: string;
    Buffer: string;
    MediaType:
      | 'pdf'
      | 'jpg'
      | 'jpeg'
      | 'tif'
      | 'tiff'
      | 'png'
      | 'doc'
      | 'docx'
      | 'bmp'
      | 'txt'
      | 'rtf'
      | 'xlsx'
      | 'xls'
      | 'gif'
      | 'zip'
      | 'ppt'
      | 'pptx'
      | 'mov';
  };
};

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#upload-client-document
 */
async function uploadClientDocument(
  args: RequestArgsPost<UploadClientDocumentPayload>,
): Promise<{ FileSize: number; FileName: string }> {
  return await MINDBODY.post('/client/uploadclientdocument', args);
}

export type UploadClientPhotoPayload = {
  Bytes: string;
  ClientId: string;
};

/**
 * Uploads a client’s profile photo. The maximum file size is 4 MB and acceptable file types are:
 *
 * - bmp
 * - jpeg
 * - gif
 * - tiff
 * - png
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#upload-client-photo
 */
async function uploadClientPhoto(
  args: RequestArgsPost<UploadClientPhotoPayload>,
): Promise<{ ClientId: number; PhotoUrl: string }> {
  return await MINDBODY.post('/client/uploadclientphoto', args);
}

// ------------------------
// DELETE /client/{endpoint}
// ------------------------

export type DeleteClientDirectDebitInfoQueryParams = {
  ClientId: string;
};

/**
 * This endpoint deletes direct debit info from a client’s account.
 * This endpoint requires staff user credentials.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#delete-client-ddinfo
 */
async function deleteClientDirectDebitInfoQ(
  args: RequestArgsDelete<DeleteClientDirectDebitInfoQueryParams>,
): Promise<boolean> {
  return await MINDBODY.delete('/client/clientdirectdebitinfo', args);
}

export type DeleteClientFormulaNoteQueryParams = {
  ClientId: string;
  FormulaNoteId: number;
};

/**
 * This endpoint deletes an existing formula note. A staff user token must be
 * included with staff assigned permission to view client profile or have
 * both ViewAppointmentDetails and ModifyAppointment permissions.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#delete-client-formula-note
 */
async function deleteClientFormulaNote(
  args: RequestArgsDelete<DeleteClientFormulaNoteQueryParams>,
): Promise<boolean> {
  return await MINDBODY.delete('/client/clientformulanote', args);
}

export type DeleteContactLogQueryParams = {
  ClientId: string;
  ContactLogId: number;
  Test?: boolean;
};

/**
 * This endpoint deletes contactlog of client. This endpoint requires staff user credentials.
 *
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#delete-contactlog
 */
async function deleteContactLog(
  args: RequestArgsDelete<DeleteContactLogQueryParams>,
): Promise<boolean> {
  return await MINDBODY.delete('/client/deletecontactlog', args);
}

export default {
  getActiveClientMemberships,
  getActiveClientsMemberships,
  getClientAccountBalances,
  getClientCompleteInfo,
  getClientContracts,
  getClientDirectDebitInfo,
  getClientDuplicates,
  getClientFormulaNotes,
  getClientIndexes,
  getClientSchedule,
  getClientReferralTypes,
  getClientPurchases,
  getClientRewards,
  getClients,
  getClientServices,
  getClientVisits,
  getCustomClientFields,
  getCrossRegionalClientAssociations,
  getRequiredClientFields,
  getContactLogs,
  getContactLogTypes,
  addArival,
  addClient,
  addClientDirectDebitInfo,
  addClientFormulaNote,
  addContactLog,
  sendAutoEmail,
  sendPasswordResetEmail,
  updateClient,
  updateClientRewards,
  updateClientService,
  updateClientVisit,
  updateContactLog,
  uploadClientDocument,
  uploadClientPhoto,
  deleteClientDirectDebitInfoQ,
  deleteClientFormulaNote,
  deleteContactLog,
  terminateContract,
};
