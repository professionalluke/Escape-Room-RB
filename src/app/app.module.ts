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
import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatListModule,
  MatDialogModule,
  MatRippleModule,
  MatOptionModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatTooltipModule,
  
 } from  '@angular/material';
import { LoginComponent } from './login/login.component';
import { BusinessComponent } from './business/business.component';
import { ModalboxComponent } from './modalbox/modalbox.component';
import { ModalboxtextComponent } from './modalboxtext/modalboxtext.component';
import { ModalboxtwoComponent } from './modalboxtwo/modalboxtwo.component';
import { ModalboxtexttwoComponent } from './modalboxtexttwo/modalboxtexttwo.component';
import { ModalboxthreeComponent } from './modalboxthree/modalboxthree.component';
import { ModalboxtextthreeComponent } from './modalboxtextthree/modalboxtextthree.component';
import { SignupComponent } from './signup/signup.component';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { AuthGuard } from '../app/guards/auth.guard';
import { UpdateBusinessComponent } from './update-business/update-business.component';
import { AdminportalComponent } from './admin/adminportal/adminportal.component';
import { AdminService } from './admin/admin.service';
import { BusinessService } from './services/business.service';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListRoomsComponent,
    UserAuthComponent,
    LoginComponent,   
    BusinessComponent,
    ModalboxComponent,
    ModalboxtextComponent,
    ModalboxtwoComponent,
    ModalboxtexttwoComponent,
    ModalboxthreeComponent,
    ModalboxtextthreeComponent,
    SignupComponent,
    CreateBusinessComponent,
    UpdateBusinessComponent,
    AdminportalComponent,

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
    MatRippleModule,
    MatOptionModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
 ],
  providers: [
    AuthGuard,
    AdminService,
    BusinessService,
    UserService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalboxComponent,
    ModalboxtwoComponent,
    ModalboxthreeComponent
  ]
})
export class AppModule { }