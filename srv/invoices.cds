using invoices from '../db/invoices';
@path: 'invoice'
service InvoiceService {
    entity Invoices as projection on invoices.Invoices;
}