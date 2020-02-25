import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToursService } from 'src/app/services/tours.service';
import { notifyService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  allTours
  matchedTour: any
  @Output() giveToChild = new EventEmitter()
  loggedInUser = JSON.parse(localStorage.getItem('user'))

  constructor(public router: Router,
    public toursService: ToursService,
    public notify: notifyService
  ) { }

  ngOnInit(): void {
    this.toursService.getTours()
      .subscribe((data: any) => {
        this.allTours = data.tours
      }, err => console.log(err))
  }
  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }
  getData(ev) {
    this.allTours.forEach(tour => {
      if (tour.name === ev.target.value) {
        this.matchedTour = tour
        this.giveToChild.emit(this.matchedTour)
      } else if (ev.key === 'Backspace') {
        this.matchedTour = null
        this.giveToChild.emit(this.matchedTour)
      }
    })
  }

  deleteTour(tourId) {
    this.allTours.splice(tourId, 1)
    this.toursService.deleteTour(tourId).subscribe(() => this.notify.showInfo('tour deleted!'),
      err => this.notify.showError(err))
  }
}
