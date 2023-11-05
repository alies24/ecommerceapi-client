import { Component, Input, OnInit } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpCustomService } from '../common/http-custom.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertifyMessageType, AlertifyOptions, AlertifyPossesionType, AlertifyService } from '../admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPositionType } from '../ui/custom-toastr.service';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {


public files: NgxFileDropEntry[];

@Input() options:Partial<FileUploadOptions>;

constructor(private httpCustom:HttpCustomService,private alertifyService:AlertifyService,
  private toastrService:CustomToastrService){

}

public dropped(files: NgxFileDropEntry[]) {
  this.files = files;
  const fileData : FormData = new FormData();
  for(const file of files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File)=>{
        fileData.append(_file.name, _file, _file.webkitRelativePath)
      })
    }

      const message:string = "The files have been uploaded successfully."
      const errorMessage:string = "ERROR!!! The files could not be loaded."


      this.httpCustom.post({
        controller: this.options.controller,
        action: this.options.actions,
        queryString: this.options.queryString,
        headers:new HttpHeaders({"responseType":"blob"})
      }
      , fileData).subscribe(data =>{
        if (this.options.isAdminPage) {
          this.alertifyService.message(message,{
            messageType: AlertifyMessageType.Success,
            positionType:AlertifyPossesionType.TopCenter,
          })
          }
        else{
          this.toastrService.message(message,"Success!",{
            toastrPositionType:ToastrPositionType.TopCenter,
            messageType:ToastrMessageType.Success,

          })

        }

      }, (errorResponse:HttpErrorResponse)=>{
        if (this.options.isAdminPage) {
          this.alertifyService.message(errorMessage,{
            messageType: AlertifyMessageType.Error,
            positionType:AlertifyPossesionType.TopCenter,
          })
          }
        else{
          this.toastrService.message(errorMessage,"ERROR!",{
            toastrPositionType:ToastrPositionType.TopCenter,
            messageType:ToastrMessageType.Error,

          })

        }

      })
    }
  }




export class FileUploadOptions{
  controller?:string;
  actions?:string;
  queryString?:string;
  explanation?:string;
  accept?:string;
  isAdminPage?:boolean = false;

}




