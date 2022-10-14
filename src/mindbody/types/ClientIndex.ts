export type ClientIndexes = {
  ClientIndexes: ClientIndex[];
};

export type ClientIndex = {
  Id: number;
  Name: string;
  RequiredBusinessMode: boolean;
  RequiredConsumerMode: boolean;
  Values: {
    Active: boolean;
    Id: number;
    Name: string;
  }[];
  Action: string;
};
