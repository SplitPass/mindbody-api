import type { DeepReadonly } from '$types';

export type Unavailability = DeepReadonly<{
  Id: number;
  StartDateTime: string;
  EndDateTime: string;
  Description: string;
}>;
