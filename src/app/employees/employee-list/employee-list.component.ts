import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];

  employee :Employee=new Employee();

  employeeToUpdate={
    employeeId:"",
    name:"",
    lastName:"",
    title:"",
    email:"",
    pass:"",
    hireDate:""
  }

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployees().subscribe(data=>{
      this.employees=data;
    });
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(
      data=>{console.log(data);
      
  },
  error => console.error(error));
  
} 

updateEmployee(){
  this.employeeService.updateEmployee(this.employeeToUpdate).subscribe(
    (resp)=>{
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }

  );

}

edit(product:any){

  this.employeeToUpdate=product;
}



}
