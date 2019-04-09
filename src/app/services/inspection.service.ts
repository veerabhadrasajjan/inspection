import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export class Country {
  PostionNo: number;
  Characteristics: string;
  LSL: number;
  USL: number;
  SC_CC: string;
  CheckingMethod: string;
  FPA: number;
  FPAResp: string;
  LPA: number;
  LPAResp: string;
  Shots: number;
  FreqHrs: number;
  StatusResp: string;
  PostionIndication: string;
}

@Injectable()
export class Service {
  ApiEndPoint: any;
  constructor(private apiService: ApiService) { 
    
  }

  public getPartAutocomplet(): Observable<any> {
    let url = "/SaleCustomer/ItemsForAutoComplete";
    return this.apiService.get(url).pipe(map(res => res));
  }

  public getCharcterstics(): Observable<any> {
    let url = "/SaleCustomer/Dimensions";
    return this.apiService.get(url).pipe(map(res => res));
  }

  public getCheckingMethod(): Observable<any> {
    let url = "/SaleCustomer/Instruments";
    return this.apiService.get(url).pipe(map(res => res));
  }

  public getEmployees(): Observable<any> {
    let url = "/SaleCustomer/GetEmployees";
    return this.apiService.get(url).pipe(map(res => res));
  }

  public saveInspection(req): Observable<any> {
    let url = "/SaleCustomer/InsertInsp";
    return this.apiService.post(url, req).pipe(map(res => res));
  }

}