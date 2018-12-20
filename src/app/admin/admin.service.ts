import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../app/models/user';
import { APIURL } from '../../environments/environment.prod';
import { Observable, of } from 'rxjs';
 const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("currentUser")
        })
    }
@Injectable()
export class AdminService {
  
   
    private _dbUrl = `${APIURL}`

    constructor(private _http: HttpClient) { }

    getUsers() {
        return this._http.get<User[]>(`${this._dbUrl}/user/all`);
    }    

    deleteUsers(id) {
        return this._http.delete(`${this._dbUrl}/user/delete/${id}`);
    }

    updateUser(id): Observable<User> {
        console.log(id);
    let updateUrl = `${this._dbUrl}/user/update/${id.id}`
    console.log(updateUrl);
    return this._http.put<User>(`${updateUrl}`, id, httpOptions);
    }
}