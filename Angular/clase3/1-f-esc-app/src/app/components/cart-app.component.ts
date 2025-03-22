import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './cart-app.component.html',
  //styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit{

  products: Product[] = [];

  constructor(private service: ProductService){

  }
  ngOnInit(): void {
  this.products = this.service.findAll();
  }
}
