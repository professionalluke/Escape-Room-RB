import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username:string;
  password:string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == '' && this.password == ''){
      this.router.navigate(["user-auth"]);
    }else {
      alert("Invalid inputs");
    }
  }
}
