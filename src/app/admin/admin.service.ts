import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../app/models/user';
import { APIURL } from '../../environments/environment.prod';

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

}