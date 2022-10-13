import type { DeepReadonly } from '$types';

export type SalesReps = DeepReadonly<{
  SalesReps: SalesRep[];
}>;

export type SalesRep = DeepReadonly<{
  Id: number;
  FirstName: string;
  LastName: string;
  SalesRepNumber: number;
  SalesRepNumbers: number[];
}>;
