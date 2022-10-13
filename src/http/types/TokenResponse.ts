import type { DeepReadonly } from '$types';

export type TokenResponse = DeepReadonly<{
  TokenType: string;
  AccessToken: string;
  User: {
    Id: number;
    FirstName: string;
    LastName: string;
    Type: string;
  };
}>;
