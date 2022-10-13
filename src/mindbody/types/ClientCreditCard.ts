import type { DeepReadonly } from '$types';

export type ClientCreditCard = DeepReadonly<{
  Address: string;
  CardHolder: string;
  CardNumber: string;
  CardType: string;
  City: string;
  ExpMonth: string;
  ExpYear: string;
  LastFour: string;
  PostalCode: string;
  State: string;
}>;
