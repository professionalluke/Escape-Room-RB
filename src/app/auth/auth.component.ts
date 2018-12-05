import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login: FormGroup
  token = ''
  private admin = []


  constructor(
    private fb: FormBuilder,
  ) { }


  ngOnInit() {
    this.login = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onLogin() {
    
  }

}
