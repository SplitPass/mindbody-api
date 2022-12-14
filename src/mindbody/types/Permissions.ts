export type Permissions = {
  PermissionGroupName: string;
  IpRestricted: boolean;
  AllowedPermissions: Permission[];
  DeniedPermissions: Permission[];
};

/**
 * https://developers.mindbodyonline.com/PublicDocumentation/V6#permission-values
 */
export enum Permission {
  AddStaffMembers = 'AddStaffMembers',
  ManageHolidays = 'ManageHolidays',
  MakeSales = 'MakeSales',
  RefundSalesToCreditCards = 'RefundSalesToCreditCards',
  AccessServicesPricingScreen = 'AccessServicesPricingScreen',
  ViewAppointmentSchedule = 'ViewAppointmentSchedule',
  ViewAllLocationOnClientLookupScreen = 'ViewAllLocationOnClientLookupScreen',
  ViewClientAutoPaySchedules = 'ViewClientAutoPaySchedules',
  ManageClientAutoPaySchedules = 'ManageClientAutoPaySchedules',
  LaunchSignInScreen = 'LaunchSignInScreen',
  ClockSelfInAndOut = 'ClockSelfInAndOut',
  ViewAllClients = 'ViewAllClients',
  ManageClientSalesReps = 'ManageClientSalesReps',
  ViewPersonalReviews = 'ViewPersonalReviews',
  ManageClassAndEventDescriptions = 'ManageClassAndEventDescriptions',
  ManageClassSchedules = 'ManageClassSchedules',
  ScheduleFreeClassesAndEvents = 'ScheduleFreeClassesAndEvents',
  ScheduleResourcesForClassesAndEvents = 'ScheduleResourcesForClassesAndEvents',
  SubstituteClassAndEventTeachers = 'SubstituteClassAndEventTeachers',
  BulkEditClassSchedules = 'BulkEditClassSchedules',
  ManagePersonalInfoForStaff = 'ManagePersonalInfoForStaff',
  ManageStaffSettings = 'ManageStaffSettings',
  ManageStaffLogins = 'ManageStaffLogins',
  ManageStaffSchedules = 'ManageStaffSchedules',
  ManageStaffPayRates = 'ManageStaffPayRates',
  AccessBusinessInformationScreen = 'AccessBusinessInformationScreen',
  AccessGeneralSetupOptionsScreen = 'AccessGeneralSetupOptionsScreen',
  AccessNewsEventsScreen = 'AccessNewsEventsScreen',
  ClassAndEventOptionsScreen = 'ClassAndEventOptionsScreen',
  AppointmentOptionsScreen = 'AppointmentOptionsScreen',
  AccessMediaManagementScreen = 'AccessMediaManagementScreen',
  AccessMembershipSetupScreen = 'AccessMembershipSetupScreen',
  ManagePaymentMethods = 'ManagePaymentMethods',
  ManageRoomNumbers = 'ManageRoomNumbers',
  AccessResourceManagementScreen = 'AccessResourceManagementScreen',
  AccessResourcesSchedulingTab = 'AccessResourcesSchedulingTab',
  AccessLinksScreen = 'AccessLinksScreen',
  BulkCancelClientReservations = 'BulkCancelClientReservations',
  FindDuplicateClients = 'FindDuplicateClients',
  MergeDuplicateClients = 'MergeDuplicateClients',
  ManageAutoEmails = 'ManageAutoEmails',
  ManageRevenueCategoriesForServices = 'ManageRevenueCategoriesForServices',
  ManageRevenueCategoriesForProducts = 'ManageRevenueCategoriesForProducts',
  AccessActiveSessionTimesScreen = 'AccessActiveSessionTimesScreen',
  AccessClassSessionTypeScreens = 'AccessClassSessionTypeScreens',
  AccessServiceCategoriesScreen = 'AccessServiceCategoriesScreen',
  ManageSubscriberPricing = 'ManageSubscriberPricing',
  AddIntroOffersOnAcquisitionDashboard = 'AddIntroOffersOnAcquisitionDashboard',
  ManageMindbodyNetworkSettings = 'ManageMindbodyNetworkSettings',
  ManageProducts = 'ManageProducts',
  ViewProductCost = 'ViewProductCost',
  ManageMembershipSettingsForPricing = 'ManageMembershipSettingsForPricing',
  ManagePromotionCodes = 'ManagePromotionCodes',
  EditSales = 'EditSales',
  PrintProductBarcodes = 'PrintProductBarcodes',
  AddProductsOnRetailScreen = 'AddProductsOnRetailScreen',
  EditSaleDateOnRetailScreen = 'EditSaleDateOnRetailScreen',
  EditSalePriceCountOnRetailScreen = 'EditSalePriceCountOnRetailScreen',
  EditActivationDateOnRetailScreen = 'EditActivationDateOnRetailScreen',
  ApplyCustomDiscountsOnRetailScreen = 'ApplyCustomDiscountsOnRetailScreen',
  PayForAnotherClientOnRetailScreen = 'PayForAnotherClientOnRetailScreen',
  VoidEditPastSales = 'VoidEditPastSales',
  RefundSales = 'RefundSales',
  LocationSwitching = 'LocationSwitching',
  PullReportsForAllLocations = 'PullReportsForAllLocations',
  LogInventory = 'LogInventory',
  AdjustInventory = 'AdjustInventory',
  TransferInventory = 'TransferInventory',
  ManagePurchaseOrders = 'ManagePurchaseOrders',
  ManageLocationLocalization = 'ManageLocationLocalization',
  ManagePermissionGroups = 'ManagePermissionGroups',
  ManageConstantContactSettings = 'ManageConstantContactSettings',
  ManageSemesters = 'ManageSemesters',
  ManageRetentionMarketing = 'ManageRetentionMarketing',
  ManageSubscriberSetupChecklist = 'ManageSubscriberSetupChecklist',
  ViewClassAndEventReservations = 'ViewClassAndEventReservations',
  BookClassesAndEvents = 'BookClassesAndEvents',
  BookClassesAndEventsInThePast = 'BookClassesAndEventsInThePast',
  BookClassesAndEventsWithoutPayment = 'BookClassesAndEventsWithoutPayment',
  CancelClassesAndEvents = 'CancelClassesAndEvents',
  ManageClassNotes = 'ManageClassNotes',
  ViewPersonalAppointmentSchedule = 'ViewPersonalAppointmentSchedule',
  EditPersonalAppointmentSchedule = 'EditPersonalAppointmentSchedule',
  ViewAppointmentDetails = 'ViewAppointmentDetails',
  ManageAppointmentRequests = 'ManageAppointmentRequests',
  BookAppointmentsForOtherStaffMembers = 'BookAppointmentsForOtherStaffMembers',
  BookAppointmentsInThePast = 'BookAppointmentsInThePast',
  ChangeAppointmentDetails = 'ChangeAppointmentDetails',
  UseAnyAppointmentAsAnAddon = 'UseAnyAppointmentAsAnAddon',
  ChangeAppointmentDuration = 'ChangeAppointmentDuration',
  CancelAppointments = 'CancelAppointments',
  ApplyPaymentToAppointments = 'ApplyPaymentToAppointments',
  CheckOutAppointments = 'CheckOutAppointments',
  OverrideAssignedPricing = 'OverrideAssignedPricing',
  ManageAppointmentColors = 'ManageAppointmentColors',
  AddClient = 'AddClient',
  ViewClientProfileScreen = 'ViewClientProfileScreen',
  EditClientProfileScreen = 'EditClientProfileScreen',
  AssignClientIndexes = 'AssignClientIndexes',
  ManageClientSuspensions = 'ManageClientSuspensions',
  ViewClientPastVisits = 'ViewClientPastVisits',
  ViewClientAccountAndPurchaseHistory = 'ViewClientAccountAndPurchaseHistory',
  EditClientServiceDurationAndAssignedVisits = 'EditClientServiceDurationAndAssignedVisits',
  EditClientServiceSessionCount = 'EditClientServiceSessionCount',
  IgnoreServiceCategoriesWhenReassigningPayment = 'IgnoreServiceCategoriesWhenReassigningPayment',
  ViewClientDocuments = 'ViewClientDocuments',
  AddClientDocuments = 'AddClientDocuments',
  DeleteClientDocuments = 'DeleteClientDocuments',
  ViewClientFutureVisits = 'ViewClientFutureVisits',
  ViewClientBillingInformation = 'ViewClientBillingInformation',
  EditClientBillingInformation = 'EditClientBillingInformation',
  ManageClientLogins = 'ManageClientLogins',
  UnassignClientGiftCards = 'UnassignClientGiftCards',
  IgnoreCancellationPolicy = 'IgnoreCancellationPolicy',
  DeleteAndTerminateClientContracts = 'DeleteAndTerminateClientContracts',
  ReleaseContractDeposits = 'ReleaseContractDeposits',
  AutoRenewAndSuspendContracts = 'AutoRenewAndSuspendContracts',
  ManageClassTests = 'ManageClassTests',
  ScheduleClassTests = 'ScheduleClassTests',
  ManageClientRequiredFields = 'ManageClientRequiredFields',
  ManageClientAlerts = 'ManageClientAlerts',
  ManageClientTypesAndClientIndexes = 'ManageClientTypesAndClientIndexes',
  ManageClientReferralTypes = 'ManageClientReferralTypes',
  ManageClientRelationshipTypes = 'ManageClientRelationshipTypes',
  ManageClientGenders = 'ManageClientGenders',
  ClientAcquisitionAndAnalyticsDashboards = 'ClientAcquisitionAndAnalyticsDashboards',
  ViewRetentionMarketingDashboard = 'ViewRetentionMarketingDashboard',
  ExportReports = 'ExportReports',
  ManageTaggedClients = 'ManageTaggedClients',
  StaffPhoneBookReport = 'StaffPhoneBookReport',
  ScheduleAtAGlanceReportForAllStaff = 'ScheduleAtAGlanceReportForAllStaff',
  PersonalScheduleAtAGlanceReport = 'PersonalScheduleAtAGlanceReport',
  AttendanceWithRevenueReport = 'AttendanceWithRevenueReport',
  CancellationsReport = 'CancellationsReport',
  PersonalCancellationsReport = 'PersonalCancellationsReport',
  AccountBalancesReport = 'AccountBalancesReport',
  BulkAutoPaySchedulingFromAccountBalancesReport = 'BulkAutoPaySchedulingFromAccountBalancesReport',
  EventInvoicesReport = 'EventInvoicesReport',
  CashDrawerReportCurrentDate = 'CashDrawerReportCurrentDate',
  CashDrawerReportAnyDate = 'CashDrawerReportAnyDate',
  DailyCloseoutReport = 'DailyCloseoutReport',
  SalesReports = 'SalesReports',
  SalesBySupplierAndProductReports = 'SalesBySupplierAndProductReports',
  PromoteFeesReport = 'PromoteFeesReport',
  GiftCardsReport = 'GiftCardsReport',
  InventoryReports = 'InventoryReports',
  MarketingReports = 'MarketingReports',
  AnalysisReports = 'AnalysisReports',
  ClientIndexesReports = 'ClientIndexesReports',
  PayrollReportsForAllStaff = 'PayrollReportsForAllStaff',
  PersonalPayrollReports = 'PersonalPayrollReports',
  StaffPerformanceReports = 'StaffPerformanceReports',
  OnlineMetricsReport = 'OnlineMetricsReport',
  RetentionManagementReport = 'RetentionManagementReport',
  EntryLogsReport = 'EntryLogsReport',
  StaffActivityLogReport = 'StaffActivityLogReport',
  MembershipReport = 'MembershipReport',
  ManageOnlineOrdersReport = 'ManageOnlineOrdersReport',
  TasksReport = 'TasksReport',
  ClockOthersInAndOut = 'ClockOthersInAndOut',
  AccessTimeclockReport = 'AccessTimeclockReport',
  ManageTimeClocks = 'ManageTimeClocks',
  ManageTimeClockTasks = 'ManageTimeClockTasks',
  ManageContactLogTypes = 'ManageContactLogTypes',
  ViewContactLogs = 'ViewContactLogs',
  AddContactLogs = 'AddContactLogs',
  EditOtherStaffMemberContactLogs = 'EditOtherStaffMemberContactLogs',
  DeleteContactLogs = 'DeleteContactLogs',
  ContactLogAnalysisReport = 'ContactLogAnalysisReport',
  SalesForecastReport = 'SalesForecastReport',
  CreateRetailTickets = 'CreateRetailTickets',
  EditRetailTickets = 'EditRetailTickets',
  ManageTaskAssignments = 'ManageTaskAssignments',
  MerchantAccountReports = 'MerchantAccountReports',
  VoidCreditCardTransactions = 'VoidCreditCardTransactions',
  SettleCreditCardTransactions = 'SettleCreditCardTransactions',
  UseStoredCreditCards = 'UseStoredCreditCards',
  ManageAutoPays = 'ManageAutoPays',
  ViewOthersReviews = 'ViewOthersReviews',
  ViewClientNamesOnReviewReport = 'ViewClientNamesOnReviewReport',
  EmailClientsFromReviewReport = 'EmailClientsFromReviewReport',
  FlagReviewForRemoval = 'FlagReviewForRemoval',
  RespondPubliclyToReviews = 'RespondPubliclyToReviews',
}
