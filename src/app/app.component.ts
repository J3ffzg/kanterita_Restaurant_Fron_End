import { Component } from '@angular/core';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orders';
  public orders:Array<any>=[];
  constructor(private ordersService:OrdersService){
    this.ordersService.getOrders().subscribe((resp:any)=>{
      console.log(resp);
      this.orders=resp;
    })
  }
}
