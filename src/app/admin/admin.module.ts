import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './layout/components/components.module';





@NgModule({
  declarations: [
  ],

  imports: [
    LayoutModule,
    CommonModule,
    ComponentsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class AdminModule { }
