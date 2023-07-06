import { HttpCustomService } from 'src/app/services/common/http-custom.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { CreateProduct } from 'src/app/models/admin/createProduct';
import { ListProduct } from 'src/app/models/admin/listProduct';
import { AlertifyMessageType, AlertifyService } from '../alertify.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  constructor(private httpCustom:HttpCustomService) {
  }

create(createProduct:CreateProduct, successCallBack?:any, errorCallBack?:any
){
  this.httpCustom.post({controller:"Products"}, createProduct).subscribe(data =>{successCallBack();},
  (errorResponse:HttpErrorResponse) => {
    const _error:Array<{key:string, value:Array<string>}> = errorResponse.error;
    let message = "";
    _error.forEach((v, index) => {
      v.value.forEach((_v, _index) => {
        message += `${_v}<br>`;
      });
      });
      errorCallBack(message)
  }
  )

}
 async read(successCallBack?:()=> void, errorCallBack? : (errorMessage:any)=> void):Promise<ListProduct[]>{
  let promiseData:Promise<ListProduct[]> = this.httpCustom.get<ListProduct[]>({
    controller:"Products"
  }).toPromise()
  promiseData.then(p=> successCallBack()).catch(p => (errorResponse:HttpErrorResponse) => errorCallBack(errorResponse.message));
  return await promiseData;


 }

 async delete(id:number){
  const deleteObservable : Observable<any> = this.httpCustom.delete({
    controller : "Products"
  }, id)
  await firstValueFrom(deleteObservable);


 }
}

