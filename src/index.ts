import type * as Http from '$http/types';
import type * as MBType from '$mindbody/types';

import Appointment from '$mindbody/Appointment';
import Class from '$mindbody/Class';
import Client from '$mindbody/Client';
import Config from '$Config';
import Enrollment from '$mindbody/Enrollment';
import Payroll from '$mindbody/Payroll';
import Sale from '$mindbody/Sale';
import Site from '$mindbody/Site';
import Staff from '$mindbody/Staff';

const exports = {
  Appointment,
  Class,
  Client,
  Config,
  Enrollment,
  Payroll,
  Sale,
  Site,
  Staff,
};

export type { MBType, Http };
export default exports;
export {
  Appointment,
  Class,
  Client,
  Config,
  Enrollment,
  Payroll,
  Sale,
  Site,
  Staff,
};
