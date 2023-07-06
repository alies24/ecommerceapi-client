import { AlertifyMessageType, AlertifyPossesionType } from './../../../../services/admin/alertify.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ListProduct } from 'src/app/models/admin/listProduct';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { ProductsService } from 'src/app/services/admin/products/products.service';
import * as $ from 'jquery'

declare var $:any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['no','name', 'unitsInStock', 'unitPrice', 'description', 'createdDate', 'updatedTime', 'delete', 'edit'];
  dataSource:MatTableDataSource<ListProduct> = null;

  constructor(spinner:NgxSpinnerService,private productService:ProductsService, private alertifyService:AlertifyService) {
    super(spinner)
   }

  async ngOnInit(){

   await this.getProducts();


  }
 async getProducts(){
    this.showSpinner(SpinnerType.LineScale)
    const allProducts: ListProduct[] = await this.productService.read(()=>this.hideSpinner(SpinnerType.LineScale),
    errorMessage => this.alertifyService.message("Products are not loading!", {messageType:AlertifyMessageType.Error, positionType:AlertifyPossesionType.TopCenter}) )
    this.dataSource = new MatTableDataSource<ListProduct>(allProducts);
    this.dataSource.paginator = this.paginator;

  }
//delete(id, event){
  //const img:HTMLImageElement = event.srcElement;
  //$(img.parentElement.parentElement).fadeOut(1000);
//}
}
