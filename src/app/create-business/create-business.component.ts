import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

import { BusinessService } from '../services/business.service'

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent implements OnInit {
  createBusiness: FormGroup
  business = []

  constructor(private _fb: FormBuilder, private _bs: BusinessService) { }

  ngOnInit() {
    this.createBusiness = this._fb.group({
      nameOfBusiness: new FormControl(),
      location: new FormControl(),
      phone: new FormControl(),
      hours: new FormControl(),
      price: new FormControl(),
      number_of_rooms: new FormControl(),
      url: new FormControl(),
      themes: new FormControl(),
      image: new FormControl(),
    })
  }

  onCreateBusiness(): void {
    this.business.unshift(this.createBusiness.value)
    this._bs.createBusiness(this.business[0]).subscribe(Business => {
      this.business[0] = Business
    })
  }

  // onDeleteBusiness(): void {
  //   this._bs.destroyBusiness(this.)
  // }
}