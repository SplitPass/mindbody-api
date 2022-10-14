export type PaymentTypes = {
  PaymentTypes: PaymentType[];
};

export type PaymentType = {
  Id: number;
  PaymentTypeName: string;
  Active: boolean;
  Fee: number;
};
