import type { Product, Service } from '$mindbody/types';

export type Packages = {
  Packages: Package[];
};

export type Package = {
  Id: number;
  Name: string;
  DiscountPercentage: number;
  SellOnline: boolean;
  Services: Service[];
  Products: Product[];
};
