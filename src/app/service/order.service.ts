import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {}
   private baseUrl="http://localhost:8080/api/orders/";

   getOrders():Observable<Order[]>{
     let newPath=this.baseUrl+"getall"
     return this.httpClient.get<Order[]>(newPath);
   }

   createOrder(order:Order):Observable<Object>{
    let newPath=this.baseUrl+"add"
     return this.httpClient.post(newPath,order);
   }

   updateOrder(order:any):Observable<Object>{
    let newPath=this.baseUrl+"update"
    return this.httpClient.put<Order>(newPath, order);
   }


   getOrderById(id:number):Observable<Order>{
    let newPath=this.baseUrl+"getById/"+id
    return this.httpClient.get<Order>(`${this.baseUrl}`+'getById/${id}');
  }

   deleteOrder(id:number):Observable<Order>{
    let newPath=this.baseUrl+"delete/"+id
    return this.httpClient.delete<Order>(newPath);

   }
}
