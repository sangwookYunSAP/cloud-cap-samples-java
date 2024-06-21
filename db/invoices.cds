namespace invoices;

entity Invoices {
    key ID : Integer;
    ProductName  : String;
    Quantity     : Integer;
    ExtendedPrice: Decimal(10, 5);
    ShipperName  : String;
    Status       : String;
}
