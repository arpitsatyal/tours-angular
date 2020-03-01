import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { notifyService } from 'src/app/services/toastr.service';
import { ReviewService } from 'src/app/services/reviews.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  submitting = false
  review
  tourId
  reviewId
  constructor(
    public notify: notifyService,
    public reviewService: ReviewService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tourId = this.activatedRoute.snapshot.params.tourId
    this.reviewId = this.activatedRoute.snapshot.params.reviewId
    this.review = new Review({})
  }
  createRev(rev) {
    this.submitting = true
    this.reviewService.createReview(this.tourId, rev)
    .subscribe(() => {
      this.notify.showSuccess('review created!')
      this.submitting = false
    }, err => {
      this.notify.showError(err)
      this.submitting = false
    })
  } 

  editRev(rev) {
    this.submitting = true
    this.reviewService.editReview(this.tourId,this.reviewId, rev)
    .subscribe(() => {
      this.notify.showSuccess('review edited!')
      this.submitting = false
    }, err => {
      this.notify.showError(err)
      this.submitting = false
    })
  } 
  
}
