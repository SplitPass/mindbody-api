import type { DeepReadonly } from '$types';

export type AddStaffSessionType = DeepReadonly<{
  StaffId: number;
  SessionType: number;
  Active: boolean;
  TimeLength: number;
  PrepTime: number;
  FinishTime: number;
  PayRateTime: number;
  PayRateType: string;
  PayRateAmount: number;
}>;
