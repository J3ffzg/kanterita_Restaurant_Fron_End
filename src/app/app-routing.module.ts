import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:'orders',component:OrdersComponent},
  {path:'detials',component:DetailsComponent},
  {path:'orders/:id/details',component:DetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
