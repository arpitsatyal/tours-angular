import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/reviews.service';
import { notifyService } from 'src/app/services/toastr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-get-reviews',
  templateUrl: './get-reviews.component.html',
  styleUrls: ['./get-reviews.component.css']
})
export class GetReviewsComponent implements OnInit {
  reviews
  imagePath
  @Input() user
  constructor(
    public activatedRoute: ActivatedRoute,
    public reviewsService: ReviewService,
    public notify: notifyService
  ) { 
    this.imagePath = environment.imageUrl + '/users'
  }

  ngOnInit(): void {
      let tourId = this.activatedRoute.snapshot.params.id
      this.reviewsService.getReview(tourId).subscribe((res: any) => {
        this.reviews = res.reviews
      }, err => {
        this.notify.showError(err)
      })
  }

}
