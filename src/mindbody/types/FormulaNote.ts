import type { DeepReadonly, Nullable } from '$types';

export type FormulaNotes = DeepReadonly<{
  FormulaNotes: FormulaNote[];
}>;

export type FormulaNote = DeepReadonly<{
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
}>;
