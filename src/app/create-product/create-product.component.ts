import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  newProduct = {};

  constructor() { }

  ngOnInit() {
  }

}
