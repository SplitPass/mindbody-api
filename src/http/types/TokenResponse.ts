export type TokenResponse = {
  TokenType: string;
  AccessToken: string;
  User: {
    Id: number;
    FirstName: string;
    LastName: string;
    Type: string;
  };
};
