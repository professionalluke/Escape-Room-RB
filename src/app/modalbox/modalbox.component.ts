import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalboxtextComponent } from '../modalboxtext/modalboxtext.component';

@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css']
})
export class ModalboxComponent implements OnInit {

  modalArr: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.getModal("modalsrock").subscribe((modalOne: string) => {
      return this.modalArr = modalOne;
  });

}

getModal(aboutus) : any {
  this.dialog.open(ModalboxtextComponent, {
    data: aboutus

});

}

}
