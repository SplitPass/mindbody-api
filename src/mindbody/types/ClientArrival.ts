import type { Nullable } from '$types';

export type ClientArrival = {
  ArrivalProgramID: number;
  ArrivalProgramName: string;
  CanAccess: boolean;
  LocationsIDs: Nullable<number>[];
};
