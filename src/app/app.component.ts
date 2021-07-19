import { Component } from '@angular/core';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  id:string="";
  addHero(order: string) {
    this.id=order;
    console.log(this.id)
    this.getDetails(this.id);
    this.getNames(this.id);
  }
  title = 'orders';
  public orders:Array<any>=[];
  public name:string="";
  constructor(private ordersService:OrdersService){
   /*  this.ordersService.getOrders().subscribe((resp:any)=>{
      console.log(resp);
      this.orders=resp;
    }) */
  }
  getDetails(id:string){
    this.ordersService.getOrders(this.id).subscribe((resp:any)=>{
      console.log(resp);
      this.orders=resp;
    })
  }
  getNames(id:string){
    this.ordersService.getName(this.id).subscribe((resp:any)=>{
      console.log(resp);
      this.name=resp;
    })
  }
}

