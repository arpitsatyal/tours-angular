import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'))
  imagePath
  constructor() { }

  ngOnInit(): void {
    this.imagePath = environment.imageUrl + '/users'

  }

}
