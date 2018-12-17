import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { APIURL } from '../../environments/environment.prod';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUservalue(): User {
        return this.currentUserSubject.value;
    }

    signup(username, password, email){
        return this.http.post<any>(`${APIURL}/user/create`, {user: {username,password, email} })
        .pipe(map(user=>{
            if(user && user) {
                localStorage.setItem('token', user.sessionToken);
            }
            return user;
        }));
    }
    login(username, password, email){
        return this.http.post<any>(`${APIURL}/user/login`, {user: {username,password, email} })
        .pipe(map(user=>{
            if(user && user) {
                localStorage.setItem('token', user.sessionToken);
            }
            return user;
        }));
    }
}