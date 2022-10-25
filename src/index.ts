import type * as Http from '$http/types';
import type * as MBType from '$mindbody/types';
import type * as MBWebhookType from '$webhooks/types';

import Appointment from '$mindbody/Appointment';
import Class from '$mindbody/Class';
import Client from '$mindbody/Client';
import Config from '$Config';
import Enrollment from '$mindbody/Enrollment';
import MindbodyError from '$http/MindbodyError';
import Payroll from '$mindbody/Payroll';
import Sale from '$mindbody/Sale';
import Site from '$mindbody/Site';
import Staff from '$mindbody/Staff';
import Webhooks from '$webhooks';

const exports = {
  Appointment,
  Class,
  Client,
  Config,
  Enrollment,
  MindbodyError,
  Payroll,
  Sale,
  Site,
  Staff,
  Webhooks,
};

export type { MBType, MBWebhookType, Http };
export default exports;
export {
  Appointment,
  Class,
  Client,
  Config,
  Enrollment,
  MindbodyError,
  Payroll,
  Sale,
  Site,
  Staff,
  Webhooks,
};
