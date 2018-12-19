import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalboxtextthreeComponent } from '../modalboxtextthree/modalboxtextthree.component';
@Component({
  selector: 'app-modalboxthree',
  templateUrl: './modalboxthree.component.html',
  styleUrls: ['./modalboxthree.component.css']
})
export class ModalboxthreeComponent implements OnInit {

  modalArrThree: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.getModalThree("modalsarethepits").subscribe((modalThree: string) => {
      return this.modalArrThree = modalThree;
  });

}

getModalThree(admin) : any {
  this.dialog.open(ModalboxtextthreeComponent, {
    data: admin

});

}

}
