import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http'
import {MatTableDataSource} from '@angular/material';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service' 

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {

  user : User[]
  userService: UserService
  update = false

  usersDataSource = new MatTableDataSource<any>();
  public usersColumnNames = ['userid','username', 'actions', 'upd'];
  

  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    this._adminService.getUsers().subscribe((d: any[]) => {
      console.log(d);
      this.usersDataSource.data = d;
     
    });
    // this.userService.getUserRole()
  }

//   getUsers() {
//     return this._http.get(`${this._dbUrl}user/getall`);
// }    


setUpdate(): void {
  this.update = true;
  console.log("hello?")
}

  deleteUser(id){
    if (localStorage.getItem('role') == 'admin'){
      this._adminService.deleteUsers(id).subscribe((res: any) => {console.log(res)})
      location.reload();
    }
    else {
      alert('Cannot delete item.')
    };
  }

  
}