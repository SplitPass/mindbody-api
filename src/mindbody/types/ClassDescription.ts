import type { Program, SessionType } from '$mindbody/types';
import type { DeepReadonly, Nullable } from '$types';

export type ClassDescriptions = DeepReadonly<{
  ClassDescriptions: ClassDescription[];
}>;

export type ClassDescription = DeepReadonly<{
  Active: boolean;
  Description: string;
  Id: number;
  ImageURL: Nullable<string>;
  LastUpdated: string;
  Level: Nullable<{
    Id: number;
    Name: string;
    Description: string;
  }>;
  Name: string;
  Notes: string;
  Prereq: string;
  Program: Program;
  SessionType: SessionType;
  Category: string;
  CategoryId: number;
  Subcategory: string;
  SubcategoryId: number;
}>;
