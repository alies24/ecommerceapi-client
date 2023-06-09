import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],

  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
