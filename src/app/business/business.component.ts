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
  constructor(private businessService: BusinessService) { }

  ngOnInit() {
    this.getBusiness();
  }

  getBusiness(): void {
    this.businessService.getLocations()
      .subscribe(businesses => {this.business = businesses, console.log(businesses)});
  }
  
  onSelect(business: Business): void {
    this.selectedBusiness = business;
  }
}
