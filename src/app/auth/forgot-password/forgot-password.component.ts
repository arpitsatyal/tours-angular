import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { notifyService } from 'src/app/services/toastr.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  user
  submitting = false
  constructor(
    public notify: notifyService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = new User({})
  }

  forgotPassword() {
    this.submitting = true
    this.authService.forgotPassword(this.user).subscribe(res => {
      console.log(res)
      this.notify.showInfo('reset link sent to mail')
      this.submitting = false
    }, err => {
      this.submitting = false
      this.notify.showError(err)
    })
  }
}
