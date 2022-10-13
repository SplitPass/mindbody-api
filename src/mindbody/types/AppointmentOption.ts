import type { DeepReadonly } from '$types';

export type AppointmentOptions = DeepReadonly<{
  AppointmentOptions: AppointmentOption[];
}>;

export type AppointmentOption = DeepReadonly<{
  DisplayName: string;
  Name: string;
  Value: string;
  Type: string;
}>;
