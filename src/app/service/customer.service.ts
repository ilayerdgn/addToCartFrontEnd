import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  private baseUrl="http://localhost:8080/api/customers/";

  getCustomers():Observable<Customer[]>{
    let newPath=this.baseUrl+"getall"
    return this.httpClient.get<Customer[]>(newPath);
  }

  createCustomer(customer:Customer):Observable<Object>{
   let newPath=this.baseUrl+"add"
    return this.httpClient.post(newPath,customer);
  }

  updateCustomer(customer:any):Observable<Object>{
   let newPath=this.baseUrl+"update"
   return this.httpClient.put<Customer>(newPath, customer);
  }


  getCustomerById(id:number):Observable<Customer>{
   let newPath=this.baseUrl+"getById/"+id
   return this.httpClient.get<Customer>(`${this.baseUrl}`+'getById/${id}');
 }

  deleteCustomer(id:number):Observable<Customer>{
   let newPath=this.baseUrl+"delete/"+id
   return this.httpClient.delete<Customer>(newPath);

  }
}
