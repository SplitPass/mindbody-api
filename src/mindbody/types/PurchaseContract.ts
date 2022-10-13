import type { DeepReadonly } from '$types';

export type PurchaseContract = DeepReadonly<{
  ClientId: string;
  LocationId: number;
  ContractId: number;
  ClientContractId: number;
  PaymentProcessingFailures: {
    Type: string;
    Message: string;
    AuthenticationRedirectUrl: string;
  }[];
}>;
