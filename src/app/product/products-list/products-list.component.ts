import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from 'src/app/service/product.service';
import {Product} from 'src/app/model/product.model'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:Product[];

  product:Product=new Product();

  productToUpdate={
    productId:"",
    categoryId:"",
    productName:"",
    unitsInStock:"",
    unitPrice:""
  }

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
    });
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      data=>{console.log(data);
      
  },
  error => console.error(error));
  
} 

updateProduct(){
  this.productService.updateProduct(this.productToUpdate).subscribe(
    (resp)=>{
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }

  );

}

edit(product:any){

  this.productToUpdate=product;
}



}
