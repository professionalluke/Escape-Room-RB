import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Business } from '../models/business';
import { BusinessService } from '../services/business.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})

export class ListRoomsComponent implements OnInit {
  @Input() business: Business;
  themes: any = []
  
  
  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private location: Location
  ) { }
  
  ngOnInit() {
    this.getBusiness();
  }

  getBusiness(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.businessService.getBusiness(id)
      .subscribe(business =>{ this.business = business, console.log(this.business)});
  }

}

