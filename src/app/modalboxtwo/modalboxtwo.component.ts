import { Component, OnInit } from '@angular/core';
import { MatDialog }from '@angular/material';
import { ModalboxtexttwoComponent } from '../modalboxtexttwo/modalboxtexttwo.component'

@Component({
  selector: 'app-modalboxtwo',
  templateUrl: './modalboxtwo.component.html',
  styleUrls: ['./modalboxtwo.component.css']
})
export class ModalboxtwoComponent implements OnInit {

  modalArrTwo: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.getModaltwo("modalsstink").subscribe((modalTwo: string) => {
      return this.modalArrTwo = modalTwo;
  });

}

getModaltwo(aboutrooms) : any {
  this.dialog.open(ModalboxtexttwoComponent, {
    data: aboutrooms

  });

}

}
