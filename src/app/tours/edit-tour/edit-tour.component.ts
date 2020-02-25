import { Component, OnInit } from '@angular/core';
import { notifyService } from 'src/app/services/toastr.service';
import { ToursService } from 'src/app/services/tours.service';
import { ActivatedRoute } from '@angular/router';
import { Tour } from 'src/app/models/tour.model';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {
  tour
  oldTour
  submitting = false
  public id = this.activatedRoute.snapshot.params.id
  constructor(
    public notify: notifyService,
    public toursService: ToursService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tour = new Tour({})
    this.toursService.getTour(this.id).subscribe((res:any) => this.oldTour = res.tour)
  }

  editTour(data) {
    this.submitting = true
    this.toursService.updateTour(this.id, data)
    .subscribe(() => {
      this.notify.showSuccess('tour updated!')
      this.submitting= false
    },
     err => {
       this.notify.showError(err)
       this.submitting= false
     })
  }
}
