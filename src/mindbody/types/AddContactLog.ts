import type { Client, Staff } from '$mindbody/types';

export type AddContactLog = {
  Id: number;
  Text: string;
  CreatedDateTime: string;
  FollowupByDate: string;
  ContactMethod: string;
  ContactName: string;
  Client: Client;
  CreatedBy: Staff;
  AssignedTo: Staff;
  Comments: {
    Id: number;
    Text: string;
    CreatedDateTime: string;
    CreatedBy: Staff;
    Types: {
      Id: number;
      SubTypes: {
        Id: number;
      }[];
    }[];
  }[];
};
