import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateProductComponent,
    PurchasesComponent,
    CreatePurchaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
