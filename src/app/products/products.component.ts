import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

import { Product } from '../product';

@Component({
  selector: 'app-products',
  providers: [AppService],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private appService: AppService) { 

  }

  ngOnInit() : void {
    this.getProducts();
  }

  getProducts(): void {
    this.appService.getProducts()
     .subscribe(products => this.products = products);
  }

}
