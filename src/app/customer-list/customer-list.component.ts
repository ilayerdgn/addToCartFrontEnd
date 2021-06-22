import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[];

  customer:Customer=new Customer();

  customerToUpdate={
    customerId:"",
    customerName:"",
    surname:"",
    mail:"",
    passw:"",
    city:""
  }

  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(){
    this.customerService.getCustomers().subscribe(data=>{
      this.customers=data;
    });
  }

  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(
      data=>{console.log(data);
      
  },
  error => console.error(error));
  
} 

updateCustomer(){
  this.customerService.updateCustomer(this.customerToUpdate).subscribe(
    (resp)=>{
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }

  );

}

edit(customer:any){

  this.customerToUpdate=customer;
}


}
