import type { DeepReadonly } from '$types';

export type ClientDuplicates = DeepReadonly<{
  ClientDuplicates: ClientDuplicate[];
}>;

export type ClientDuplicate = DeepReadonly<{
  Id: string;
  UniqueId: string;
  FirstName: string;
  LastName: string;
  Email: string;
}>;
