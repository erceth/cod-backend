import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';
import { OrdersComponent } from './orders/orders.component';
import { ConvertUnixSecondsToDatePipe } from './convert-unix-seconds-to-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateProductComponent,
    PurchasesComponent,
    CreatePurchaseComponent,
    OrdersComponent,
    ConvertUnixSecondsToDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
