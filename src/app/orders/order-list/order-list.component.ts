import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders:Order[];

  order:Order=new Order();

  orderToUpdate={
    orderId:"",
    customerId:"",
    employeeId:"",
    orderDate:"",
    shipCity:""
  }

  constructor(private orderService:OrderService, private router:Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders(){
    this.orderService.getOrders().subscribe(data=>{
      this.orders=data;
    });
  }

  deleteOrder(id:number){
    this.orderService.deleteOrder(id).subscribe(
      data=>{console.log(data);
      
  },
  error => console.error(error));
  
} 

updateOrder(){
  this.orderService.updateOrder(this.orderToUpdate).subscribe(
    (resp)=>{
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }

  );

}

edit(order:any){

  this.orderToUpdate=order;
}


}
