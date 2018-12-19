import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


  
    
  
})
export class AppComponent {
  tokenVar: any;

  constructor(private httpClient:HttpClient) {}
  title = 'Escape plan';

  logout() {
    localStorage.removeItem('token');
    
  }

}
 