import { AlertifyMessageType, AlertifyPossesionType, AlertifyService } from 'src/app/services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { ProductsService } from 'src/app/services/admin/products/products.service';
import { HttpCustomService } from 'src/app/services/common/http-custom.service';
import { SpinnerType } from 'src/app/base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

declare var $:any;
@Directive({
  selector: '[appDelete]'
})

export class DeleteDirective {

  constructor(private alertifyService:AlertifyService,public dialog: MatDialog,private ngxSpinner:NgxSpinnerService,private httpCustom:HttpCustomService, private render:Renderer2, private element:ElementRef) {
    const img = render.createElement("img");
    img.setAttribute("src","../../../../../assets/delete.png");
    img.setAttribute("style", "cursor:pointer;");
    img.width = "15";
    img.height = "15";
    render.appendChild(element.nativeElement, img );
   }
   @Input() id:number;
   @Input() controller:string;
   @Output() callback:EventEmitter<any> = new EventEmitter();
   @HostListener("click")
    async onClick(){
    this.openDialog (async ()=>{
    this.ngxSpinner.show(SpinnerType.LineScale);
    const td:HTMLTableCellElement = this.element.nativeElement;
    await this.httpCustom.delete({
      controller: this.controller
    }, this.id).subscribe(data=> {
      $(td.parentElement).fadeOut(2000, ()=>{
        this.callback.emit();
        this.alertifyService.message("Success!", {
          positionType: AlertifyPossesionType.TopCenter,
          messageType:AlertifyMessageType.Success
        })
      }, (errorResponse:HttpErrorResponse)=>{
        this.ngxSpinner.hide(SpinnerType.LineScale);
        this.alertifyService.message("ERROR!",{
          messageType: AlertifyMessageType.Error,
          positionType: AlertifyPossesionType.TopCenter
        })
      });

      })
    });


   }

   openDialog(afterClosed:any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == DeleteState.Yes)
      afterClosed();
    });
  }
}


