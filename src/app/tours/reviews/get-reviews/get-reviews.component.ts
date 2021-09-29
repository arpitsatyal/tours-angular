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
  user = JSON.parse(localStorage.getItem('user'))
  ratings = [1,2,3,4,5]
  tourId = this.activatedRoute.snapshot.params.id
  constructor(
    public activatedRoute: ActivatedRoute,
    public reviewsService: ReviewService,
    public notify: notifyService
  ) { 
  }

  ngOnInit(): void {
      this.reviewsService.getReview(this.tourId).subscribe((res: any) => {
        this.reviews = res.reviews
      }, 
      err => this.notify.showError(err))
  }
  deleteReview(tourId, reviewId) {
    this.reviews.splice(reviewId, 1)
    this.reviewsService.deleteReview(tourId, reviewId).subscribe(() => this.notify.showInfo('review deleted!'), err => this.notify.showError(err))
  }
}
