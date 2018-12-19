import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { BusinessService } from '../services/business.service'

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent implements OnInit {
  createBusiness: FormGroup
  business = []

  constructor(
    private _fb: FormBuilder, 
    private _bs: BusinessService,
    // private matDialogRef: MatDialogRef<CreateBusinessComponent>,
    // public dialog: MatDialog
    ) { }

  ngOnInit() {
    // this.createBusiness = this._fb.group({
    //   nameOfBusiness: "",
    //   location: "",
    //   phone: "",
    //   hours: "",
    //   price: "",
    //   number_of_rooms: "",
    //   url: "",
    //   themes: "",
    //   image: ""
    // })
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

  // submit(Form) {
  //   this.matDialogRef.close(Form.value)
  // }

  onCreateBusiness(): void {
    this.business.unshift(this.createBusiness.value)
    console.log(this.business)
    this._bs.createBusiness(this.business[0])
    // .subscribe(Business => {this.business[0] = Business})
  }

  // onCreateBusiness() {
  //   this._bs.createBusiness(this.createBusiness.value);
  //   // this.matDialogRef.close();
  // }

  // onDeleteBusiness(): void {
  //   this._bs.destroyBusiness(this.)
  // }
}
