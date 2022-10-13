import type { DeepReadonly, Nullable } from '$types';

export type ClientArrival = DeepReadonly<{
  ArrivalProgramID: number;
  ArrivalProgramName: string;
  CanAccess: boolean;
  LocationsIDs: Nullable<number>[];
}>;
