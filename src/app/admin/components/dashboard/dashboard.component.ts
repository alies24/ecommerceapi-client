import { AlertifyMessageType, AlertifyService, AlertifyPossesionType } from './../../../services/admin/alertify.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService, private alertify:AlertifyService) {
    super(spinner)
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.LineScale)

  }

}
