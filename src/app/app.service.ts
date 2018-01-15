import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';

@Injectable()
export class AppService {

  private productsUrl = '/api/products';

  constructor(
    private http: HttpClient
    
  ) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

}
