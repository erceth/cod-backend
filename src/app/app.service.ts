import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';

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

}
