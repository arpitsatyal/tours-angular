import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="footer">
  <div class="footer__logo">
    <img src="./../../../assets/img/logo-green.png" alt="Natours logo" />
  </div>
  <ul class="footer__nav">
    <li><a routerLink="#">About us</a></li>
    <li><a routerLink="#">Download apps</a></li>
    <li><a routerLink="#">Become a guide</a></li>
    <li><a routerLink="#">Careers</a></li>
    <li><a routerLink="#">Contact</a></li>
  </ul>
  <p class="footer__copyright">
    &copy; by Arpit Satyal. All rights reserved.
  </p>
</div>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

