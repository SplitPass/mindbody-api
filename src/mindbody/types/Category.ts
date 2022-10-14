import type { SubCategory } from '$mindbody/types';
import type { Nullable } from '$types';

export type Categories = {
  Categories: Category[];
};

export type Category = {
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
};
