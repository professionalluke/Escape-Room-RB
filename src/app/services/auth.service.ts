import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { APIURL } from '../../environments/environment.prod';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dbUrl = `${APIURL}/user`;

  constructor(
    private _http: HttpClient,
    private messageService: MessageService
  ) { }



  getUser(id: number): Observable<User> {
    const url = `${this.dbUrl}/${id}`;
    console.log(url);
    return this._http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
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
