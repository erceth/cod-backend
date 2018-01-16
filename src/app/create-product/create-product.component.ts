import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

import { Product } from '../product';

@Component({
  selector: 'create-product',
  providers: [AppService],
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  formInput = {
    name: '',
    description: '',
    price: 0
  };

  constructor(private appService: AppService) { }

  ngOnInit() {}

  onSubmit() {
    console.log(this.formInput);
    let newProduct = new Product();
    newProduct.name = this.formInput.name;
    newProduct.description = this.formInput.description;
    newProduct.price = this.formInput.price;
    this.appService.createProduct(newProduct).subscribe(response => {
      console.log('response', response)
    });
  }

}
