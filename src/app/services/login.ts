import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '/services/authentication.service';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 error = '';

 constructor(
   private router: Router,
   private authenticationService: AuthenticationService
 ) { }

 ngOnInit() {}

 login(username, password) {
   this.authenticationService.login(username, password)
     .subscribe(
       data => {
         this.router.navigate([`/home`]);
       },
       error => {
         this.error = error;
       });

 }

}