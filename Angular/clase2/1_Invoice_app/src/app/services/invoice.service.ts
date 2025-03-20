import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
//EXPORTAR UN ATRIBUTO:
  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice{
    const total = this.calcularTotal();
    return {... this.invoice, total}
  }

  remove(id: number): Invoice{
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calcularTotal();

    return {... this.invoice, total};
  }

  calcularTotal(){
    //OPTION 2
    // let total = 0;
    // this.invoice.items.forEach(item =>{
    //   //total += (item.price * item.quantity); OPTION 1
    //   total += item.total();
    // });
    // return total;

    //OPTION 3 con ACUMULADOR:
    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

}
