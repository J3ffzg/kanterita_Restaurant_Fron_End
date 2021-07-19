import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
url = "http://localhost:8080/orders/1/details";
  constructor(private http:HttpClient) {
    console.log('servicio')
   }
   getOrders(){
     let header = new HttpHeaders()
     .set('Type-content','aplication/json')
     return this.http.get(this.url,{
       headers:header
     });
   }
}
