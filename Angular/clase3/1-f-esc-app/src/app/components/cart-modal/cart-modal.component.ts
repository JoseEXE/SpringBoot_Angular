import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
 // styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {

    @Input() items: CartItem[] = [];
    @Input() total: number = 0;

    @Output() idProductEventEmitter = new EventEmitter();
  
    onDeleteCart(id: number){
      this.idProductEventEmitter.emit(id);
    }

    @Output() openCartEventEmitter = new EventEmitter();

    openCart(): void {
      this.openCartEventEmitter.emit(); 
    }
}
