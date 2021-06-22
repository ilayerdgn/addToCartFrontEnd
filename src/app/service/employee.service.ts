import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { loginRequest } from '../model/loginRequest.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {}
   private baseUrl="http://localhost:8080/api/employees/";

   getEmployees():Observable<Employee[]>{
     let newPath=this.baseUrl+"getall"
     return this.httpClient.get<Employee[]>(newPath);
   }

   createEmployee(employee:Employee):Observable<Object>{
    let newPath=this.baseUrl+"add"
     return this.httpClient.post(newPath,employee);
   }

   updateEmployee(employee:any):Observable<Object>{
    let newPath=this.baseUrl+"update"
    return this.httpClient.put<Employee>(newPath, employee);
   }


   getEmployeeById(id:number):Observable<Employee>{
    let newPath=this.baseUrl+"getById/"+id
    return this.httpClient.get<Employee>(`${this.baseUrl}`+'getById/${id}');
  }

   deleteEmployee(id:number):Observable<Employee>{
    let newPath=this.baseUrl+"delete/"+id
    return this.httpClient.delete<Employee>(newPath);

   }
   login(LoginRequest:loginRequest):Observable<Employee[]>{
     let newPath=this.baseUrl+"login"
     return this.httpClient.post<Employee[]>(newPath,LoginRequest);
   }

   
}
