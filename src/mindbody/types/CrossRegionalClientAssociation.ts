import type { DeepReadonly } from '$types';

export type CrossRegionalClientAssociations = DeepReadonly<{
  CrossRegionalClientAssociations: CrossRegionalClientAssociation[];
}>;

export type CrossRegionalClientAssociation = DeepReadonly<{
  SiteId: string;
  ClientId: string;
  UniqueId: string;
}>;
