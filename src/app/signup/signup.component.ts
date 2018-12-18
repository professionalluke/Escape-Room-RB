import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User;
  error = '';

  constructor(private router: Router, private userservice: UserService, private http: HttpClient) { }


  ngOnInit() {
  }

  signup(username, password, email) {
    console.log(username, password, email)
    this.userservice.signup(username, password, email)
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error => {
          this.error = error;
        }
      )
  }
 onSubmit() {
   this.userservice.signup(
     this.user.username,
     this.user.password,
     this.user.email,
     )
     .subscribe(res => {
       console.log(res), sessionStorage.setItem("token", res.Token)
     })
 }
}
