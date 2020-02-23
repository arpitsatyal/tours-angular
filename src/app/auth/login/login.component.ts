import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
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
        this.router.navigate(['/getTours'])
      }, err => {
        console.log(err)
        setTimeout(() => this.submitting = false, 3000)
        this.notify.showError(err)
      })
  }
  isLoggedIn() {
    return localStorage.getItem('token') ? true : false
  }
}
