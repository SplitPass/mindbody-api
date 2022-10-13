import type { DeepReadonly } from '$types';

export type ContactLogs = DeepReadonly<{
  ContactLogTypes: ContactLog[];
}>;

export type ContactLog = DeepReadonly<{
  Id: number;
  Name: string;
  SubTypes: {
    Id: number;
  };
}>;
