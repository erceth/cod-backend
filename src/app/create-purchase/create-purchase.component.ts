import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

import { Purchase } from '../purchase';

@Component({
  selector: 'create-purchase',
  providers: [AppService],
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent implements OnInit {

  formInput = {
    customerFirstName: '',
    customerLastName: '',
    productId: '',
    baseCost: 0,
    salesTax: 0,
    addressLn1: '',
    addressLn2: '',
    state: '',
    zip: ''
  };

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  onSubmit() {
    let newPurchase = new Purchase();
    newPurchase.customerFirstName = this.formInput.customerFirstName;
    newPurchase.customerLastName = this.formInput.customerLastName;
    newPurchase.productId = this.formInput.productId;
    newPurchase.baseCost = this.formInput.baseCost;
    newPurchase.salesTax = this.formInput.salesTax;
    newPurchase.addressLn1 = this.formInput.addressLn1;
    newPurchase.addressLn2 = this.formInput.addressLn2;
    newPurchase.state = this.formInput.state;
    newPurchase.zip = this.formInput.zip;
    console.log('newPurchase', newPurchase);
    this.appService.createPurchase(newPurchase).subscribe(response => {
      console.log('response', response);
    })
  }

}
