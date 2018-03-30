import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import { Purchase } from './purchase';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
    
  ) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  createProduct (newProduct: Product): Observable<Product> {
    return this.http.post<Product>('/api/products', newProduct);
  }

  getPurchases (): Observable<Purchase[]> {
    return this.http.get<Purchase[]>('/api/purchases');
  }

  createPurchase (newPurchase): Observable<Purchase> {
    return this.http.post<Purchase>('/api/purchase', newPurchase);
  }
  
  getOrders (limit) {
    return this.http.get(`/api/orders?limit=${limit}`)
  }

}
