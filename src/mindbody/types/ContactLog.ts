export type ContactLogs = {
  ContactLogTypes: ContactLog[];
};

export type ContactLog = {
  Id: number;
  Name: string;
  SubTypes: {
    Id: number;
  };
};
