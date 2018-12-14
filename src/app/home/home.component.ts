import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  message: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialogRef.open(DialogHomePage, {
      width: '250px',
      data: {message: this.message}
    });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.message = result;

  });

  }
}
  ngOnInit() 
  }

}
