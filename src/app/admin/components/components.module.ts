import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { Router, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProductsModule,
    OrdersModule,
    CustomersModule,
    DashboardModule,
    RouterModule,



  ],
  exports:[
    ProductsComponent,
    OrdersComponent,
    CustomersComponent,
    DashboardComponent,
   


  ]
})
export class ComponentsModule { }
