import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Business } from '../models/business';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'

})
export class ListRoomsService {
  private dbUrl = 'https://localhost:3000/';

  constructor(
    private _http: HttpClient
  ) { }


}
