import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ConvertUnixSecondsToDatePipe } from '../convert-unix-seconds-to-date.pipe'

@Component({
  selector: 'orders',
  providers: [AppService],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.appService.getOrders(50)
      .subscribe((stripeOrders: any) => {
        this.orders = stripeOrders.data;
      })
  }

}
