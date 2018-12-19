import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
    private CurrentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
  
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    get isLoggedIn() {
      return this.loggedIn.asObservable();
    }

  constructor(
    private http: HttpClient, 
    private _router: Router) {
        this.CurrentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.CurrentUserSubject.asObservable();  
      }

      public get currentUserValue(): User {
        return this.CurrentUserSubject.value;
      }


  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/'])
  }

  // isLoggedIn() {
  //   if(localStorage.getItem('token') == null) {
  //     this.loggedIn = false;
  //   }
  // }
}
