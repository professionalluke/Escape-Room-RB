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

  
  getBusiness(id: number): Observable<Business> {
    const url = `${this.dbUrl}/${id}`;
    console.log(url);
    return this._http.get<Business>(url).pipe(
      tap(_ => this.log(`fetched business id=${id}`)),
      catchError(this.handleError<Business>(`getBusiness id=${id}`))
    );
  }

  createBusiness(business: Business) : Observable<Business[]> {
    const url = `${this.dbUrl}/create`
    console.log(url)
    return this._http.post<Business[]>(url, {business}, httpOptions)
  }

  deleteBusiness(id: number) : Observable<Business> {
    const url = `${this.dbUrl}/delete/${id}`;
    return this._http.delete<Business>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted business id=${id}`)),
      catchError(this.handleError<Business>('deleteBusiness'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  private log(message: string) {
    this.messageService.add(`BusinessService: ${message}`);
  }
}