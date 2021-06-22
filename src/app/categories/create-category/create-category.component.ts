import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category:Category=new Category();
  submitted=false;

  constructor(private categoryService:CategoryService ,private router:Router) { }

  ngOnInit(): void {
  }
  saveCategory(){
    this.categoryService.createCategory(this.category).subscribe(data=>{
      console.log(data);
      //this.goToCategoryList();
    },
    error=>console.log(error));


  }

  /*goToCategoryList(){
    this.router.navigate(['/categories']);
  }*/



  onSubmit(){
    console.log(this.category);
    this.saveCategory();
    }

}
