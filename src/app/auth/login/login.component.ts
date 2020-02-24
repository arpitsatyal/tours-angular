import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { notifyService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitting = false
  user
  constructor(public authService: AuthService,
    public notify: notifyService,
    public router: Router) { }

  ngOnInit(): void {
    this.user = new User({})
  }
  login(e) {
    e.preventDefault()
    this.submitting = true
    this.authService.login(this.user)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token)     
        localStorage.setItem('user', JSON.stringify(res.user))  
        this.router.navigate(['/tours/getTours'])
      }, err => {
        this.notify.showError(err)
        this.submitting = false
      })
  }
}
