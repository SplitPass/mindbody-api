export type ClientVisits = {
  Visits: ClientVisit[];
};

export type ClientVisit = {
  AppointmentId: number;
  AppointmentGenderPreference: string;
  AppointmentStatus: string;
  ClassId: number;
  ClientId: number;
  StartDateTime: string;
  EndDateTime: string;
  Id: number;
  LastModifiedDateTime: string;
  LateCancelled: boolean;
  SiteId: number;
  LocationId: number;
  MakeUp: boolean;
  Name: string;
  ServiceId: number;
  ServiceName: string;
  ProductId: number;
  SignedIn: boolean;
  StaffId: number;
  WebSignup: boolean;
  Action: string;
  Missed: boolean;
  VisitType: number;
  TypeGroup: number;
  TypeTaken: string;
};
