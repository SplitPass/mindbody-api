import type { DeepReadonly } from '$types';

export type DirectDebitInfo = DeepReadonly<{
  NameOnAccount: string;
  RoutingNumber: string;
  AccountNumber: string;
  AccountType: 'Checking' | 'Savings';
}>;
