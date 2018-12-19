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
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
        this.currentUser = this.currentUserSubject.asObservable(); //this is what breaks the code back and forth.
    }

    public get currentUservalue(): User {
        console.log(this.currentUserSubject.value)
        return this.currentUserSubject.value;
        
    }

    signup(username, password, email){
        console.log('you hit this one')
        let UserToServer = {
        // user: {
            username,
            password,
            email
        // }
    }
        return this.http.post<any>(`${APIURL}/user/create`,UserToServer)
        .pipe(map(user=>{
            if(user && user) {
                localStorage.setItem('token', user.sessionToken);
                console.log('you hit this')
            }
            return user;
        }));
    }
    login(username, password, role){
        let UserToServer = {
            username,
            password,
            role,
        }
        return this.http.post<any>(`${APIURL}/user/login`, UserToServer)
        .pipe(map(user=>{
            if(user && user) {
                localStorage.setItem('token', user.sessionToken);
                // localStorage.setItem('role', user.role.value);
                console.log('got it!')
                console.log(user.role.value)
            }
            return user;
        }));
    }
}