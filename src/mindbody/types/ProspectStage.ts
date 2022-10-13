import type { DeepReadonly } from '$types';

export type ProspectStages = DeepReadonly<{
  ProspectStages: ProspectStage[];
}>;

export type ProspectStage = DeepReadonly<{
  Id: number;
  Active: boolean;
  Description: string;
}>;
