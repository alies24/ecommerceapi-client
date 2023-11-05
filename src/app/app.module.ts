
import { UiModule } from './ui/ui.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { DeleteDirective } from './directives/admin/delete.directive';
import { FileUploadDialogComponent } from './dialogs/file-upload-dialog/file-upload-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    FileUploadDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule, UiModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
  ],
  providers: [
    {provide:"baseUrl", useValue: "https://localhost:44381/api", multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
