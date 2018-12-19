import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { APIURL } from '../../environments/environment.prod';

import {Business } from '../models/business';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class BusinessService {
  private dbUrl = `${APIURL}/business`;

  constructor(
    private _http: HttpClient,
    private messageService: MessageService
  ) { }

  getLocations(): Observable<Business[]> {
    return this._http.get<Business[]>(this.dbUrl+`/all`)
    .pipe(
      tap(_ => this.log('fetched businesses')),
      catchError(this.handleError('getLocations',[]))
    )
    
  }

  // getBusiness(id:number): Observable<Business> {
  //   return this._http.get<Business>(`http:localhost:3000/business/${id}`).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Business>(`getBusiness id=${id}`))
  //   )
  // }
  
  getBusiness(id: number): Observable<Business> {
    const url = `${this.dbUrl}/${id}`;
    console.log(url);
    return this._http.get<Business>(url).pipe(
      tap(_ => this.log(`fetched business id=${id}`)),
      catchError(this.handleError<Business>(`getBusiness id=${id}`))
    );
  }

  // createBusiness(business: Business) : Observable<Business[]> {
  //   const url = `${this.dbUrl}/create`
  //   console.log(url)
  //   return this._http.post<Business[]>(url, business, httpOptions)
  // }

  createBusiness(business: any) {
    return this._http.post(`${this.dbUrl}/create`, business)
  }
  // updateBusiness(business: Business): Observable<Business[]> {
  //   const url = `${this.dbUrl}/update/${id}`
  //   return this._http.put<Business[]>(url, business, httpOptions)
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  private log(message: string) {
    this.messageService.add(`BusinessService: ${message}`);
  }
}
