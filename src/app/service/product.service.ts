import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";

import { Product } from '../model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}
   private baseUrl="http://localhost:8080/api/products/";

   getProducts():Observable<Product[]>{
     let newPath=this.baseUrl+"getall"
     return this.httpClient.get<Product[]>(newPath);
   }

   createProduct(product:Product):Observable<Object>{
    let newPath=this.baseUrl+"add"
     return this.httpClient.post(newPath,product);
   }

   updateProduct(product:any):Observable<Object>{
    let newPath=this.baseUrl+"update"
    return this.httpClient.put<Product>(newPath, product);
   }


   getProductById(id:number):Observable<Product>{
    let newPath=this.baseUrl+"getById/"+id
    return this.httpClient.get<Product>(`${this.baseUrl}`+'getById/${id}');
  }

   deleteProduct(id:number):Observable<Product>{
    let newPath=this.baseUrl+"delete/"+id
    return this.httpClient.delete<Product>(newPath);

   }

   
}
