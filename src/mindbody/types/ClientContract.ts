export type ClientContracts = {
  Contracts: ClientContract[];
};

export type ClientContract = {
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
};
