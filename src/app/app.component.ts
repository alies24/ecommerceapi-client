import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';



declare var $:any;
declare var alertify:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce Client';
  constructor(private spinner: NgxSpinnerService){}

  ngOnInit(): void {
  }



  }




