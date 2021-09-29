import { Component, OnInit } from '@angular/core';
import { notifyService } from 'src/app/services/toastr.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.css']
})
export class MyReviewsComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private notify: notifyService
  ) { }

  ngOnInit(): void {
    this.userService.myReviews()
    .subscribe(res => {
      console.log(res)
    }, err => this.notify.showError(err))
  }

}
