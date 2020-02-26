import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { notifyService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  toUpdate
  user = JSON.parse(localStorage.getItem('user'))
  constructor(
    public usersService: UsersService,
    public activatedRoute: ActivatedRoute,
    public notify: notifyService
  ) { }

  ngOnInit(): void {
    this.toUpdate = new User({})
  }
  updateMe() {
    let id = this.activatedRoute.snapshot.params.id
    this.usersService.updateUser(id, this.toUpdate)
    .subscribe((res:any) => {
      localStorage.setItem('user', JSON.stringify(res.updated))
      this.notify.showSuccess('account updated')
    }, err => this.notify.showError(err))
  }
}
