import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { CreateBusinessComponent } from './create-business/create-business.component';

import {LoginComponent} from './login/login.component'

import { UserAuthComponent} from './user-auth/user-auth.component'
import { BusinessComponent } from './business/business.component';
import { SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'business', component: BusinessComponent},
  {path: 'user-auth', component: UserAuthComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list-rooms/:id', component: ListRoomsComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'create-business', component: CreateBusinessComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
