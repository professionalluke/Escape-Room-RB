import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalboxComponent } from '../modalbox/modalbox.component';
import { ModalboxtwoComponent } from '../modalboxtwo/modalboxtwo.component';
import { ModalboxthreeComponent } from '../modalboxthree/modalboxthree.component';

export interface DialogData {
  message: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message: string;

  constructor (public dialog: MatDialog) {}

   openModal (): void {
    this.dialog.open(ModalboxComponent, {
      width: '600px' ,
      data: {message: this.message}
    }); 
  }
 
  openModalTwo (): void {
    this.dialog.open(ModalboxtwoComponent, {
      width: '600px' ,
      data: {message: this.message}
    }); 
  }
 

 openModalThree (): void {
  this.dialog.open(ModalboxthreeComponent, {
    width: '600px' ,
    data: {message: this.message}
  }); 
}

}
