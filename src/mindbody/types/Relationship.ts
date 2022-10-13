import type { DeepReadonly } from '$types';

export type Relationships = DeepReadonly<{
  Relationships: Relationship[];
}>;

export type Relationship = DeepReadonly<{
  Id: number;
  RelationshipName1: string;
  RelationshipName2: string;
}>;
