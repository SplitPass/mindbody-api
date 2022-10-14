import type { Sale } from '$mindbody/types';

export type ClientPurchases = {
  Purchases: ClientPurchase[];
};

export type ClientPurchase = {
  Sale: Sale;
};
