import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  public userEditForm: FormGroup;
  @Input() user
  private _router: Router
  token: string
  

  constructor(private _fb: FormBuilder, private _as: AdminService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.userEditForm = this._fb.group({
      id: this.user.id,
      username: this.user.username,
      role: this.user.role,
    });
  }


  onSubmit(form) {
    this._as.updateUser(form.value).subscribe((updateUser) => {
      console.log("updateUser")
      location.reload()
    })
  }
}

