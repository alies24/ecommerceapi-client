import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent{

  constructor(private spinner:NgxSpinnerService) { }


  showSpinner(spinnerType:SpinnerType){
    this.spinner.show(spinnerType)
    setTimeout(() => {
      this.spinner.hide(spinnerType)

    }, 3000);

  }

}
export enum SpinnerType{
  Pacman ="pacman",
  LineScale = "line"
}
