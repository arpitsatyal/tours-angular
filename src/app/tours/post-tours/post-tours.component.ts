import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/models/tour.model';
import { ToursService } from 'src/app/services/tours.service';
import { notifyService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-post-tours',
  templateUrl: './post-tours.component.html',
  styleUrls: ['./post-tours.component.css']
})
export class PostToursComponent implements OnInit {
  tour
  submitting = false
  constructor(
    public toursService: ToursService,
    public notfiy: notifyService
  ) { }

  ngOnInit(): void {
    this.tour = new Tour({})
  }
  createTour() {
    this.submitting = true
    this.toursService.postTour(this.tour)
    .subscribe(result => {
      console.log(result)
      this.submitting = false
      this.notfiy.showSuccess('tour created')
    debugger
    }, err => {
      this.submitting = false
      console.log(err)
      this.notfiy.showError(err)
    } )
  }
}
