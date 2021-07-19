import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../models/orders';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  title = 'orders';
  public orders:Array<any>=[];
  constructor(private router:Router,
    private ordersService:OrdersService) { }
    /* orderss:Orders[]; */

  ngOnInit(): void {
    /* this.ordersService
    .getOrders()
    .subscribe(
      (OrdersApi:Orders[]=>this.orderss=OrdersApi,
        error=>console.error(error)
        ); */
  }
  showDetails(orderId:number){
    this.router.navigate(["/orders",orderId,'details'])
  }

}
