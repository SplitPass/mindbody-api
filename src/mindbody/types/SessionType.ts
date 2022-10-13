import type { DeepReadonly, Nullable } from '$types';

export type StaffSessionTypes = DeepReadonly<{
  StaffSessionTypes: Omit<SessionType, 'OnlineDescription'> &
    {
      StaffId: number;
      TimeLength: number;
      PrepTime: Nullable<number>;
      FinishTime: Nullable<number>;
      PayRateType: string;
      PayRateAmount: Nullable<number>;
    }[];
}>;

export type SessionTypes = DeepReadonly<{
  SessionTypes: SessionType[];
}>;

export type SessionType = DeepReadonly<{
  Type:
    | 'All'
    | 'Class'
    | 'Enrollment'
    | 'Appointment'
    | 'Resource'
    | 'Media'
    | 'Arrival';
  DefaultTimeLength: Nullable<number>;
  StaffTimeLength: Nullable<number>;
  Id: number;
  Name: string;
  NumDeducted: number;
  ProgramId?: number;
  Category?: string;
  CategoryId?: number;
  Subcategory?: string;
  SubcategoryId?: number;
  OnlineDescription?: string;
}>;
