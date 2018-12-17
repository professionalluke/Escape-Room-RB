import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  users = [];
  error = '';

  constructor(private router: Router, private userservice: UserService, private http: HttpClient) { }


  ngOnInit() {
  }

  signup(username, password, email) {
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

}