import { Component, OnInit } from '@angular/core';
import { notifyService } from 'src/app/services/toastr.service';
import { ToursService } from 'src/app/services/tours.service';
import { Tour } from 'src/app/models/tour.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tour',
  templateUrl: './search-tour.component.html',
  styleUrls: ['./search-tour.component.css']
})
export class SearchTourComponent implements OnInit {
  submitting = false
  toSearch
  allTours = []
  public results = []
  startLocations = []
  showName = false
  names = []
  constructor(
    public notify: notifyService,
    public toursService: ToursService,
    public router: Router

  ) { }

  ngOnInit(): void {
    this.toSearch = new Tour({})
    this.toursService.getTours()
      .subscribe((res: any) => {
        this.allTours = res.tours
        this.allTours.forEach(tour => {
          if (!this.startLocations.includes(tour.startLocation.description)) this.startLocations.push(tour.startLocation.description)
        })
      }, err => this.notify.showError(err))
  }

  search() {
    this.submitting = true
    this.toursService.searchTours(this.toSearch)
      .subscribe((data: any) => {
        this.submitting = false
        this.results = data.final
        if(this.results.length) {
          this.notify.showSuccess('found!!')
        } else {
          this.notify.showInfo('no items matched!')
        }
      }, err => {
        this.notify.showError(err)
        this.submitting = false
      })
  }
  onstartLocationSelected(startLocations) {
    this.showName = true
    this.names = this.allTours.filter(data => data.startLocation.description === startLocations)
  }
  resetSearch() {
    this.results.length = 0
    this.toSearch = new Tour({})
  }
}
