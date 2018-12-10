import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  signUp: FormGroup
  login: FormGroup
  token = ''
  private user = []


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.login = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
    
    this.signUp = this.fb.group({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  onLogin() {

  }

  onSignUp(){

  }
}
