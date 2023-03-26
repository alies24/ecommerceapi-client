import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastrService:ToastrService) {

   }
   message(message:string, title:string, toastrOptions:Partial<ToastrOptions>){
    this.toastrService[toastrOptions.messageType = ToastrMessageType.Info]
    (message, title,
    {positionClass:toastrOptions.toastrPositionType, timeOut : toastrOptions.timeOut = 10000 })



   }

}
export class ToastrOptions{
  messageType:ToastrMessageType;
  toastrPositionType:ToastrPositionType;
  timeOut:number
}
export enum ToastrPositionType{
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"


}

export enum ToastrMessageType{
  Error = "error",
  Info = "info",
  Success = "success",
  Warning =  "warning",
}
