import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message:string, alertifyOptions:Partial<AlertifyOptions> ){
    alertify.set('notifier','position', alertifyOptions.positionType);
    alertify.set('notifier','delay', alertifyOptions.delay);
    alertify[alertifyOptions.messageType = AlertifyMessageType.Message](message);


  }
  dismiss(){
    alertify.dismiss();
  }
}

export class AlertifyOptions
{
  messageType:AlertifyMessageType;
  positionType:AlertifyPossesionType;
  delay:number;
}
export enum AlertifyMessageType{
  Error = "error",
  Success = "success",
  Notify = "notify",
  Message = "message",
  Warning = "warning"
}
export enum AlertifyPossesionType{
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}
