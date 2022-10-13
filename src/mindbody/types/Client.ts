import type {
  AssignedClientIndex,
  ClientCreditCard,
  ClientRelationship,
  Location,
  MobileProvider,
  ProspectStage,
  SalesRep,
} from '$mindbody/types';
import type { DeepReadonly, Nullable } from '$types';

export type Clients = DeepReadonly<{
  Clients: Client[];
}>;

export type Client = DeepReadonly<{
  AppointmentGenderPreference: string;
  BirthDate: Nullable<string>;
  Country: string;
  CreationDate: string;
  CustomClientFields: Record<string, unknown>[];
  ClientCreditCard: Nullable<ClientCreditCard>;
  ClientIndexes: AssignedClientIndex[];
  ClientRelationships: ClientRelationship[];
  FirstAppointmentDate: Nullable<string>;
  FirstName: string;
  Id: string;
  IsCompany: boolean;
  IsProspect: boolean;
  LastName: string;
  Liability: {
    AgreementDate: Nullable<string>;
    IsReleased: boolean;
    ReleasedBy: Nullable<number>;
  };
  LiabilityRelease: boolean;
  MembershipIcon: number;
  MobileProvider: MobileProvider;
  Notes: string;
  State: string;
  UniqueId: number;
  LastModifiedDateTime: string;
  RedAlert: Nullable<string>;
  YellowAlert: Nullable<string>;
  MiddleName: Nullable<string>;
  ProspectStage: Nullable<ProspectStage>;
  Email: string;
  MobilePhone: Nullable<string>;
  HomePhone: Nullable<string>;
  WorkPhone: Nullable<string>;
  AccountBalance: number;
  AddressLine1: Nullable<string>;
  AddressLine2: Nullable<string>;
  City: string;
  PostalCode: string;
  WorkExtension: Nullable<string>;
  ReferredBy: Nullable<string>;
  PhotoUrl: Nullable<string>;
  EmergencyContactInfoName: Nullable<string>;
  EmergencyContactInfoEmail: Nullable<string>;
  EmergencyContactInfoPhone: Nullable<string>;
  EmergencyContactInfoRelationship: Nullable<string>;
  Gender: string;
  LastFormulaNotes: Nullable<string>;
  Active: boolean;
  SalesReps: Nullable<SalesRep[]>;
  Status: string;
  Action: string;
  SendAccountEmails: boolean;
  SendAccountTexts: boolean;
  SendPromotionalEmails: boolean;
  SendPromotionalTexts: boolean;
  SendScheduleEmails: boolean;
  SendScheduleTexts: boolean;
  HomeLocation: Location;
  LockerNumber: Nullable<string>;
  SuspensionInfo: Nullable<{
    BookingSuspended: boolean;
    SuspensionStartDate: Nullable<string>;
    SuspensionEndDate: Nullable<string>;
  }>;
}>;
