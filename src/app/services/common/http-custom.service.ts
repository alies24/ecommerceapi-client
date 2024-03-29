import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCustomService {

  constructor(private httpClient:HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(requestParameter: Partial<RequestParameters>): string {
  return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
  }
   get<T>(requestParameter: Partial<RequestParameters>, id?: string): Observable<T> {
    let newUrl: string = "";
    if (requestParameter.fullEndPoint)
      newUrl = requestParameter.fullEndPoint;
    else
      newUrl = `${this.url(requestParameter)}`;

    return this.httpClient.get<T>(newUrl, { headers: requestParameter.headers});
  }
  post<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let newUrl: string = "";
    if (requestParameter.fullEndPoint)
      newUrl = requestParameter.fullEndPoint;
    else{
      newUrl = `${this.url(requestParameter)}`
    }
    return this.httpClient.post<T>(newUrl, body, { headers: requestParameter.headers});
  }
  put<T>(requestParameter:Partial<RequestParameters>, body:Partial<T>, id?:number ):Observable<T>{
    let newUrl:string = "";
    if(requestParameter.fullEndPoint)
    newUrl = requestParameter.fullEndPoint;
    else{
      newUrl = `${this.url(requestParameter)}`;
    }
    return this.httpClient.put<T>(newUrl, body, {headers:requestParameter.headers})


  }
  delete<T>(requestParameter:Partial<RequestParameters>, id:number):Observable<T>{
    let newUrl:string = "";
    if(requestParameter.fullEndPoint)
    newUrl = requestParameter.fullEndPoint;
    else{
      newUrl = `${this.url(requestParameter)}/?id=${id}`;
    }
    return this.httpClient.delete<T>(newUrl, {headers:requestParameter.headers})


  }



}

export class RequestParameters{
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
  queryString?:string;

}
