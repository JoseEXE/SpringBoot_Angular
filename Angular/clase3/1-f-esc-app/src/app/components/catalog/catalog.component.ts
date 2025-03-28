import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { PoductCardComponent } from '../poduct-card/poduct-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [PoductCardComponent],
  templateUrl: './catalog.component.html',
  //styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  @Input() products!: Product[]; 

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();


  onAddCart(product: Product){
    this.productEventEmitter.emit(product);
  }
}

