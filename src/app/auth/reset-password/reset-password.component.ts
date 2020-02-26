import { Component, OnInit } from '@angular/core';
import { notifyService } from 'src/app/services/toastr.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  submitting = false
  user
  constructor(
    public notify: notifyService,
    public authService: AuthService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user = new User({})
  }
  submit() {
    this.submitting = true
    this.authService.resetPassword(this.activatedRoute.snapshot.params.token, this.user)
    .subscribe(() => {
      this.notify.showSuccess('password changed!')
      this.submitting = false
    }, err => {
      this.submitting = false
      this.notify.showError(err)
    })
  }
}
