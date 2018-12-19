import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

import { Business } from '../models/business'
import { BusinessService } from '../services/business.service'

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent implements OnInit {
  createBusiness: FormGroup
  business : Business[]
  tempBusinessId: number
  createdClick = false

  constructor(private _fb: FormBuilder, private _bs: BusinessService) { }

  ngOnInit() {
    this.createBusiness = this._fb.group({
     "nameOfBusiness": new FormControl(),
      "location": new FormControl(),
      "phone": new FormControl(),
      "hours": new FormControl(),
      "price": new FormControl(),
      "number_of_rooms": new FormControl(),
     "url": new FormControl(),
      "themes": new FormControl(),
      "image": new FormControl(),
    })
  }

  onSubmit(){
    console.log(this.createBusiness.value)
    this._bs.createBusiness(this.createBusiness.value).subscribe(res => {
      console.log(res)
    })
  }

  clickedButton(id){
    this.createdClick = !this.createdClick;
    this.tempBusinessId = id;
  }

  // onCreateBusiness(): void {
  //   this.business.push(this.createBusiness.value)
  //   this._bs.createBusiness(this.createBusiness.value)
  // }

  onDeleteBusiness(id) {
    this._bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}