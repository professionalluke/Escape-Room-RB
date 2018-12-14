import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

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
  private dbUrl = 'http://localhost:3000/business/all';

  constructor(
    private _http: HttpClient,
    private messageService: MessageService
  ) { }

  getLocations(): Observable<Business[]> {
    return this._http.get<Business[]>(this.dbUrl)
    .pipe(
      tap(_ => this.log('fetched businesses')),
      catchError(this.handleError('getLocations',[]))
    )
    
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
