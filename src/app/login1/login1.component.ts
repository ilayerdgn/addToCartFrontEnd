import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { loginRequest } from '../model/loginRequest.model';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  employees:Employee[];
  LoginRequest:loginRequest=new loginRequest();
  submitted:false;
  isLoggedIn = false;
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  logIn(){
    this.employeeService.login(this.LoginRequest).subscribe(
     data=>{
       this.employees=data;
       if(this.employees.length===1){
        this.router.navigate(['products']);
       }
       else{
         console.error();
       }
     }
    );
  }



  onSubmit(){
    console.log(this.LoginRequest);
    this.logIn();
    
    }
}
