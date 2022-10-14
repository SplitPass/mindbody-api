import type { Client, Staff } from '$mindbody/types';

export type UpdatedContactLog = {
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
};
