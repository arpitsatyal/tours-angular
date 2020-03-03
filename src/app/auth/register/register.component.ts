import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
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
    this.submitting = true
    this.authService.register(this.user)
      .subscribe(() => {
        this.notify.showSuccess('register successs, now login')
        this.submitting = false
      }, err => {
        this.notify.showError(err)
        this.submitting = false
      })
  }
  checkUsername(name) {
    this.authService.checkUsername(name).subscribe((res: any) =>{
   this.notify.showInfo(`username ${res.username} already exists`)
  })
  }
}
