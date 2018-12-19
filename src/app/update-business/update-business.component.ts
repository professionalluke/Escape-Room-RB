// import { Component, OnInit, Input } from '@angular/core';
// import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import { BusinessService } from '../services/business.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-update-business',
//   templateUrl: './update-business.component.html',
//   styleUrls: ['./update-business.component.css']
// })
// export class UpdateBusinessComponent implements OnInit {
//   public businessEditForm: FormGroup;
//   @Input() id: number;
//   private _router: Router
//   token: string

//   constructor(private _fb: FormBuilder, private _bs: BusinessService) { }

//   ngOnInit() {
//     this.createForm()
//   }

//   createForm() {
//     this.businessEditForm = this._fb.group({
//       id: this.id,
//       nameOfBusiness: new FormControl(),
//       location: new FormControl(),
//       phone: new FormControl(),
//       hours: new FormControl(),
//       price: new FormControl(),
//       number_of_rooms: new FormControl(),
//       url: new FormControl(),
//       themes: new FormControl(),
//       image: new FormControl(),
//     });
//   }
