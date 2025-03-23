import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-poduct-card',
  standalone: true,
  imports: [],
  templateUrl: './poduct-card.component.html',
  //styleUrl: './poduct-card.component.css'
})
export class PoductCardComponent {

  @Input() product!: Product;

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter(); 
  onAddCart(product: Product){
    this.productEventEmitter.emit(product);
  }
}
