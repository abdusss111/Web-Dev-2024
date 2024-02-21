import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';
import { Item } from "./models";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent {
  products: Item[] = [];

  constructor() {
    this.products.push(
      new Item(1, 'iPhone 15', 'Description for Product 1', 1200, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2Fsmartfon_apple_iphone_15_128gb_blue_mtp43_274375_1.jpg&w=3840&q=85'),
      new Item(2, 'iPhone 14', 'Description for Product 2', 1000, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=3840&q=85'),
      new Item(3, 'iPhone 13', 'Description for Product 2', 900, 'https://cdn.shoplightspeed.com/shops/662820/files/47556235/800x800x3/apple-iphone-13-128-gb.jpg'),
      new Item(4, 'iPhone 12', 'Description for Product 2', 800, 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082213416796/201106080048951631.png@jpeg'),
      new Item(5, 'iPhone 11', 'Description for Product 2', 600, 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228936_1.jpg&w=3840&q=85'),

    );
  }
}
