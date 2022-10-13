import type { SubCategory } from '$mindbody/types';
import type { DeepReadonly, Nullable } from '$types';

export type Categories = DeepReadonly<{
  Categories: Category[];
}>;

export type Category = DeepReadonly<{
  Id: number;
  CategoryName: string;
  Description: Nullable<string>;
  Service: boolean;
  Active: boolean;
  IsPrimary: boolean;
  IsSecondary: boolean;
  CreatedDateTimeUTC: string;
  ModifiedDateTimeUTC: string;
  SubCategories: SubCategory[];
}>;
