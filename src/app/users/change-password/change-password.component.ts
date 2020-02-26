import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { notifyService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  toUpdate
  updating = false
  user = JSON.parse(localStorage.getItem('user'))
  constructor(
    public usersService: UsersService,
    public notify: notifyService
  ) { }

  ngOnInit(): void {
    this.toUpdate = new User({})
  }
  updatePassword() {
    this.updating = true
    this.usersService.updatePassword(this.toUpdate)
    .subscribe((data:any) => {
      this.updating = false
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      this.notify.showSuccess('password updated successfully')
    } , err =>  {
      this.notify.showError(err)
      this.updating = false
    })
  }
 }
