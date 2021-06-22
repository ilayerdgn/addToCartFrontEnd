import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  submitted=false;

  constructor(private categoryService:EmployeeService ,private router:Router) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.categoryService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.router.navigate(['login']);
      
    },
    error=>console.log(error));


  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    }

}
