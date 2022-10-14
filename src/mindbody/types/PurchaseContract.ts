export type PurchaseContract = {
  ClientId: string;
  LocationId: number;
  ContractId: number;
  ClientContractId: number;
  PaymentProcessingFailures: {
    Type: string;
    Message: string;
    AuthenticationRedirectUrl: string;
  }[];
};
