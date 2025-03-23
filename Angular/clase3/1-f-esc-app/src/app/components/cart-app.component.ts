import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { MatIconModule } from '@angular/material/icon';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { CartItem } from '../models/cartItem';
import { PoductCardComponent } from './poduct-card/poduct-card.component';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent],
  templateUrl: './cart-app.component.html',
  //styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit{

  products: Product[] = [];

  items: CartItem[] = [];

  constructor(private service: ProductService){

  }
  ngOnInit(): void {
  this.products = this.service.findAll();
  }

  onAddCart(product: Product){
    this.items = [... this.items , {product: {...product}, quantity: 1} ];
  }
}
