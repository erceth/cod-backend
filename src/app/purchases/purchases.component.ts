import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

import { Purchase } from '../purchase';

@Component({
  selector: 'purchases',
  providers: [AppService],
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  purchases: Purchase[];
  showAddForm = false;

  constructor(private appService: AppService) { }

  ngOnInit() : void {
    // this.getPurchases();
  }

  getPurchases(): void {
    this.appService.getPurchases()
      .subscribe(purchases => this.purchases = purchases)
  }

  revealAdd(): void{
    this.showAddForm = true;
  }
  hideAdd(): void {
    this.showAddForm = false;
  }

}
