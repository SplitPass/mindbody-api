export type ProductsInventory = {
  ProductsInventory: {
    ProductId: number;
    BarcodeId: string;
    LocationId: number;
    UnitsLogged: number;
    UnitsSold: number;
    UnitsInStock: number;
    ReorderLevel: number;
    MaxLevel: number;
    CreatedDateTimeUTC: string;
    ModifiedDateTimeUTC: string;
  };
};

export type Products = {
  Products: Product[];
};

export type Product = {
  ProductId: number;
  Id: string;
  CategoryId: number;
  SubCategoryId: number;
  Price: number;
  TaxIncluded: number;
  TaxRate: number;
  GroupId: number;
  Name: string;
  OnlinePrice: number;
  ShortDescription: string;
  LongDescription: string;
  TypeGroup: number;
  SupplierId: number;
  SupplierName: string;
  ImageURL: string;
  Color: {
    Id: number;
    Name: string;
  };
  Size: {
    Id: number;
    Name: string;
  };
  ManufacturerId: string;
};
