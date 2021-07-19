import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Details } from '../models/details';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
baseUrlDetails = environment.apiUrl+'orders/';
baseUrlOrders = environment.apiUrl+'orders/';
  constructor(private http:HttpClient) {
    console.log('servicio')
   }
   getOrders(id:string){
     let header = new HttpHeaders()
     .set('Type-content','aplication/json')
     return this.http.get(this.baseUrlDetails+id+"/details",{
       headers:header
     });
   }
   getName(id:string){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get(this.baseUrlOrders+id,{
      headers:header
    });
  }

  getDetails():Observable<Details[]>{
    return this.http.get<Details[]>(this.baseUrlDetails);
  }
  getDetailsByOrders(id:number):Observable<Details[]>{
    const url =`${this.baseUrlDetails}?orderId=${id}`
    return this.http.get<Details[]>(url);
  }
}
