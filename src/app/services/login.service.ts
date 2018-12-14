import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { user-auth } from '../models/userModel';
import { Token } from '@angular/compiler';

const httpOptions = {
 headers: new HttpHeaders({
     'Content-Type': 'application/json'
 })
}

@Injectable({
 providedIn: 'root'
})

export class AuthenticationService {
 private currentUserSubject: BehaviorSubject<User>;
 public currentUser: Observable<User>;

 constructor(private http: HttpClient) {
     this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
     this.currentUser = this.currentUserSubject.asObservable();
 }

 public get currentUserValue(): User {
   return this.currentUserSubject.value;
}

 login(username: string, password: string) {
   return this.http.post<any>(`http://localhost:3000/user/login`, {user: {username, password }})
   .pipe(map(user => {
     
     if (user && user) {

         localStorage.setItem('token', user.sessiontoken);
         // this.currentUserSubject.next(user);
     }

     return user;
 }));
}


logout() {
 // remove user from local storage to log user out
 localStorage.removeItem('token');
 // this.currentUserSubject.next(null);
}
}