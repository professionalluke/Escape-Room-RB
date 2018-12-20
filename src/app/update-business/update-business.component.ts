import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BusinessService } from '../services/business.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-business',
  templateUrl: './update-business.component.html',
  styleUrls: ['./update-business.component.css']
})
export class UpdateBusinessComponent implements OnInit {
  public businessEditForm: FormGroup;
  @Input() business
  private _router: Router
  token: string

  constructor(private _fb: FormBuilder, private _bs: BusinessService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.businessEditForm = this._fb.group({
      id: this.business.id,
      name: this.business.name,
      location: this.business.location,
      phone: this.business.phone,
      hours: this.business.hours,
      price: this.business.price,
      number_of_rooms: this.business.number_of_rooms,
      url: this.business.url,
      themes: this.business.themes,
      image: this.business.image,
    });
  }

  onSubmit(form) {
    this._bs.updateBusiness(form.value).subscribe((updateBusiness) => {
      console.log(updateBusiness)
      location.reload()
    })
  }
}
