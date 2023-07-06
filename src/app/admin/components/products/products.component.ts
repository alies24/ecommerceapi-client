import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { Component, OnInit } from '@angular/core';
import { HttpCustomService } from 'src/app/services/common/http-custom.service';
import { Product } from 'src/app/models/admin/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  products:Product[];

  constructor(spinner:NgxSpinnerService, private httpCustom:HttpCustomService) {
    super(spinner)
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.LineScale);


  }
}
