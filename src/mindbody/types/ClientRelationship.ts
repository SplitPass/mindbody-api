import type { Relationship } from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type ClientRelationship = DeepReadonly<{
  RelatedClientId: string;
  RelationshipName: string;
  Delete: boolean;
  Relationship: Relationship[];
}>;
