import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { Login1Component } from './login1/login1.component';
import { Product } from './model/product.model';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductsListComponent,
    CreateCategoryComponent,
    CategoryListComponent,
    OrderListComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
  
    Login1Component,
       CustomerListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Login1Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
