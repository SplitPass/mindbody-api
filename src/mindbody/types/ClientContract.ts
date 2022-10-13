import type { DeepReadonly } from '$types';

export type ClientContracts = DeepReadonly<{
  Contracts: ClientContract[];
}>;

export type ClientContract = DeepReadonly<{
  AgreementDate: string;
  AutopayStatus: 'Active' | 'Inactive' | 'Suspended';
  ContractName: string;
  EndDate: string;
  Id: number;
  OriginationLocationId: number;
  StartDate: string;
  SiteId: number;
  UpcomingAutopayEvents: {
    ClientContractId: number;
    ChargeAmount: number;
    PaymentMethod: string;
    ScheduleDate: string;
  }[];
}>;
