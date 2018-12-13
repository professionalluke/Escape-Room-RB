import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserAuthComponent } from './user-auth/user-auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// import { LoginComponent } from './login/login.component';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import { LoginComponent } from './login/login.component';


import { BusinessComponent } from './business/business.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListRoomsComponent,
    UserAuthComponent,
    LoginComponent,
    // LoginComponent,    
    BusinessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    CarouselModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
