import type { Nullable } from '$types';

export type Locations = {
  Locations: Location[];
};

export type Location = {
  AdditionalImageURLs: Nullable<string[]>;
  Address: string;
  Address2: string;
  Amenities: Nullable<
    {
      Id: number;
      Name: string;
    }[]
  >;
  BusinessDescription: Nullable<string>;
  City: string;
  Description: string;
  HasClasses: boolean;
  Id: number;
  Latitude: number;
  Longitude: number;
  Name: string;
  Phone: string;
  PhoneExtension: Nullable<string>;
  PostalCode: string;
  SiteID: number;
  StateProvCode: string;
  Tax1: number;
  Tax2: number;
  Tax3: number;
  Tax4: number;
  Tax5: number;
  TotalNumberOfRatings: number;
  AverageRating: number;
  TotalNumberOfDeals: number;
};
