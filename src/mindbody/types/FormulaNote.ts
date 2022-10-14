import type { Nullable } from '$types';

export type FormulaNotes = {
  FormulaNotes: FormulaNote[];
};

export type FormulaNote = {
  Id: number;
  ClientId: string;
  Note: string;
  EntryDate: string;
  AppointmentId: number;
  SiteId: string;
  SiteName: string;
  StaffFirstName: Nullable<string>;
  StaffLastName: Nullable<string>;
  StaffDisplayName: Nullable<string>;
};
