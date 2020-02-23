import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  loggedInUser = JSON.parse(localStorage.getItem('user')).username
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  isLoggedIn() {
    return localStorage.getItem('token') ? true : false
  }
  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
