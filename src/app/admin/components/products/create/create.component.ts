import { AlertifyMessageType, AlertifyOptions, AlertifyPossesionType } from './../../../../services/admin/alertify.service';

import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/models/admin/createProduct';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { ProductsService } from 'src/app/services/admin/products/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(private productService:ProductsService, spinner:NgxSpinnerService, private alertify:AlertifyService) {
    super(spinner);
   }

  ngOnInit(): void {

  }
  create(description:HTMLInputElement, name:HTMLInputElement, stock:HTMLInputElement, unitPrice:HTMLInputElement){
    this.showSpinner(SpinnerType.LineScale)
  const createProduct:CreateProduct = new CreateProduct();
  createProduct.name = name.value;
  createProduct.description = description.value;
  createProduct.unitPrice = parseFloat(unitPrice.value);
  createProduct.unitsInStock = parseInt(stock.value);
  this.productService.create(createProduct, () => {this.showSpinner(SpinnerType.LineScale);
    this.alertify.message("Successful", {positionType:AlertifyPossesionType.TopCenter
    , messageType:AlertifyMessageType.Success});
  }, errorMessage => {
    this.alertify.message("Error",{
      messageType:AlertifyMessageType.Error,
      positionType:AlertifyPossesionType.TopCenter
    })
  }
     )



}
}
