import type { Relationship } from '$mindbody/types';

export type ClientRelationship = {
  RelatedClientId: string;
  RelationshipName: string;
  Delete: boolean;
  Relationship: Relationship[];
};
