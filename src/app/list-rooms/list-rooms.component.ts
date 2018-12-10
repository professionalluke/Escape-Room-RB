import { Component, OnInit } from '@angular/core';
import {ListRoomsService } from '../services/list-rooms.service';
import { Business } from '../models/business';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  business: Business[];

  constructor(private themesService: ListRoomsService) { }

  ngOnInit() {
  }

}
