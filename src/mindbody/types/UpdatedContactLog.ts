import type { Client, Staff } from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type UpdatedContactLog = DeepReadonly<{
  Id: number;
  Text: string;
  CreatedDateTime: string;
  FollowupByDate: string;
  ContactMethod: string;
  Client: Client;
  CreatedBy: Staff;
  AssignedTo: Staff;
  Comments: {
    Id: number;
    Text: string;
    CreatedDateTime: string;
    CreatedBy: Staff;
  }[];
  Types: {
    Id: number;
    SubTypes: {
      Id: number;
    }[];
  }[];
}>;
