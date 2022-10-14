export type Programs = {
  Programs: Program[];
};

export type Program = {
  Id: number;
  Name: string;
  ScheduleType:
    | 'All'
    | 'Class'
    | 'Enrollment'
    | 'Appointment'
    | 'Resource'
    | 'Arrival';
  CancelOffset: number;
  ContentFormats: ('InPerson' | 'Livestream:Mindbody' | 'Livestream:Other')[];
};
