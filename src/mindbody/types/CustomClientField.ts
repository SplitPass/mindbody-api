import type { DeepReadonly } from '$types';

export type CustomClientFields = DeepReadonly<{
  CustomClientFields: CustomClientField[];
}>;

export type CustomClientField = DeepReadonly<{
  Id: string;
  DataType: string;
  Name: string;
}>;
