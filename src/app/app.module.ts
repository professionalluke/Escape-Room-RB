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
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,MatDialogModule, MatDialog, MatDialogRef} from  '@angular/material';
import { LoginComponent } from './login/login.component';



import { BusinessComponent } from './business/business.component';
import { AdminComponent } from './admin/admin.component';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { SignupComponent } from './signup/signup.component';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NavbarComponent } from './navbar/navbar.component';


export function getToken(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListRoomsComponent,
    UserAuthComponent,
    LoginComponent,  
    BusinessComponent,
    AdminComponent,
    SignupComponent,
    CreateBusinessComponent,
    NavbarComponent,
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
    MatDialogModule,
    // MatDialogRef
 ],
  providers: [AuthService, AuthGuard, JwtHelperService],
  bootstrap: [AppComponent],
  entryComponents: [CreateBusinessComponent]
})
export class AppModule { }
