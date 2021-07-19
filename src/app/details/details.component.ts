import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from '../models/details';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private ordersService:OrdersService
  ) { }
details:Details[]=[];
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      if(params.has("id")){
       /*  this.ordersService.getDetailsByOrders(params.get("id")).subscribe(details=>this.details); */
      }else{
        this.ordersService.getDetails().subscribe(details=>this.details = details);
      }
    })
  }
  goToOrders(){
    this.router.navigate(['/orders']);
  }
}
