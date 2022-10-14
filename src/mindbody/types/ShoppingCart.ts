import type { Appointment, Class, Enrollment } from '$mindbody/types';

export type ShoppingCart = {
  ShoppingCart: {
    Id: string;
    CartItems: {
      Item: {
        Id: string;
        Name: string;
        Count?: number;
        OnlinePrice: number;
        Price: number;
        TaxRate: number;
        ProductId?: string;
        ProgramId?: number;
        TaxIncluded: number;
        GroupId?: number;
        ShortDesc?: string;
        LongDesc?: string;
        Color?: {
          Id: number;
          Name: string;
        };
        Size?: {
          Id: number;
          Name: string;
        };
      };
      DiscountAmount: number;
      VisitIds: number[];
      AppointmentIds: number[];
      Appointments: Appointment[];
      Id: number;
      Quantity: number;
    }[];
    SubTotal: number;
    DiscountTotal: number;
    TaxTotal: number;
    GrandTotal: number;
  };
  Classes: Class[];
  Appointments: Appointment[];
  Enrollments: Enrollment[];
};
