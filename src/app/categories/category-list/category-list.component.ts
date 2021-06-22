import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:Category[];

  category:Category=new Category();

  categoryToUpdate={
    categoryId:"",
    categoryName:"",
  }

  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    });
  }

  deleteCategory(id:number){
    this.categoryService.deleteCategory(id).subscribe(
      data=>{console.log(data);
      
  },
  error => console.error(error));
  
} 

updateCategory(){
  this.categoryService.updateCategory(this.categoryToUpdate).subscribe(
    (resp)=>{
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }

  );

}

edit(category:any){

  this.categoryToUpdate=category;
}


}
