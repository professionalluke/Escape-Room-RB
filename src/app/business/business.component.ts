import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../services/business.service';

import { Business } from '../models/business';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business: Business[];
  selectedBusiness: Business;
  tempBusinessId: number
  createdClick = false
  update = false

  constructor(private businessService: BusinessService) { }

  ngOnInit() {
    this.getBusiness();
  }

  getBusiness(): void {
    this.businessService.getLocations()
      .subscribe(businesses => {this.business = businesses, console.log(businesses)});
  }

  setUpdate(): void {
    this.update = true;
    console.log("hello?")
  }
  
  // clickedButton(id) {
  //   this.createdClick = !this.createdClick;
  //   this.tempBusinessId = id;
  // }

  onSelect(business: Business): void {
    this.selectedBusiness = business;
  }
  onDeleteBusiness(id) {
    this.businessService.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
    location.reload();
  }
}