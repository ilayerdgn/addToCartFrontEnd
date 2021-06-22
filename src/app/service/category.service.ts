import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {}
  private baseUrl="http://localhost:8080/api/categories/";

  getCategories():Observable<Category[]>{
    let newPath=this.baseUrl+"getall"
    return this.httpClient.get<Category[]>(newPath);
  }

  createCategory(category:Category):Observable<Object>{
   let newPath=this.baseUrl+"add"
    return this.httpClient.post(newPath,category);
  }

  updateCategory(category:any):Observable<Object>{
   let newPath=this.baseUrl+"update"
   return this.httpClient.put<Category>(newPath, category);
  }


  getCategoryById(id:number):Observable<Category>{
   let newPath=this.baseUrl+"getById/"+id
   return this.httpClient.get<Category>(`${this.baseUrl}`+'getById/${id}');
 }

  deleteCategory(id:number):Observable<Category>{
   let newPath=this.baseUrl+"delete/"+id
   return this.httpClient.delete<Category>(newPath);

  }
}
