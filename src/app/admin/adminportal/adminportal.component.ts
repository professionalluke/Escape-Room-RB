import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http'
import {MatTableDataSource} from '@angular/material';
import { User } from '../../models/user';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {

  usersDataSource = new MatTableDataSource<any>();
  public usersColumnNames = ['userid','username', 'actions'];
  

  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    this._adminService.getUsers().subscribe((d: any[]) => {
      console.log(d);
      this.usersDataSource.data = d;
    });
  }

//   getUsers() {
//     return this._http.get(`${this._dbUrl}user/getall`);
// }    

  deleteUser(id){
    if (localStorage.getItem('token') !== null || undefined){
      this._adminService.deleteUsers(id).subscribe((res: any) => {console.log(res)})
    }
    else {
      alert('Cannot delete item.')
    };
  }
}