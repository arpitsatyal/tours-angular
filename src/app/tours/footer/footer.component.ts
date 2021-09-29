import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="footer">
  <div class="footer__logo">
    <img src="https://res.cloudinary.com/arpit7xx/image/upload/v1632915858/logo-green_usahlj.png" alt="Natours logo" />
  </div>
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

