import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { Login1Component } from './login1/login1.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductsListComponent } from './product/products-list/products-list.component';


const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'add',component:CreateProductComponent},
  {path:'products',component:ProductsListComponent},
  {path:'addCategories',component:CreateCategoryComponent},
  {path:'categories',component:CategoryListComponent},
  {path:'orders',component:OrderListComponent},
  {path: 'login', component: Login1Component },
  {path:'employee',component:EmployeeListComponent},
  {path:'register',component:CreateEmployeeComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'customers',component:CustomerListComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
