import type { Sale } from '$mindbody/types';
import type { DeepReadonly } from '$types';

export type ClientPurchases = DeepReadonly<{
  Purchases: ClientPurchase[];
}>;

export type ClientPurchase = DeepReadonly<{
  Sale: Sale;
}>;
