import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { notifyService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitting = false
  user
  constructor(
    public authService: AuthService,
    public notify: notifyService
  ) { }

  ngOnInit(): void {
    this.user = new User({})
  }
  register(e) {
    e.preventDefault()
    this.authService.register(this.user)
    .subscribe(data => {
      console.log(data)
      this.notify.showSuccess('register successs, now login')
    }, err => this.notify.showError(err))
    this.submitting = true
    setTimeout(() => this.submitting = false, 3000)
  }
}
