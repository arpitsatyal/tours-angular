import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/services/tours.service';
import { ActivatedRoute } from '@angular/router';
import { notifyService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-tours-details',
  templateUrl: './tours-details.component.html',
  styleUrls: ['./tours-details.component.css']
})
export class ToursDetailsComponent implements OnInit {
  tour
  tourFirstName
  tourLastName
  constructor(
    public toursService: ToursService,
    public activatedRoute: ActivatedRoute,
    public notify: notifyService
  ) { }

  ngOnInit(): void {
    let currentTour = this.activatedRoute.snapshot.params.id
    this.toursService.getTour(currentTour)
      .subscribe((result:any) => {
        this.tour = result.tour
        this.tourFirstName = `${result.tour.name.split(' ')[0]} ${result.tour.name.split(' ')[1]}`
        this.tourLastName = result.tour.name.split(' ')[2]
      }, err => this.notify.showError(err))
  }

}
