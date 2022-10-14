export type DirectDebitInfo = {
  NameOnAccount: string;
  RoutingNumber: string;
  AccountNumber: string;
  AccountType: 'Checking' | 'Savings';
};
