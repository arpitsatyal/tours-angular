import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { notifyService } from 'src/app/services/toastr.service';
import { ToursService } from 'src/app/services/tours.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  matchedTour: any
  @Input() getFromView 
  @Output() giveToChild = new EventEmitter()
  loggedInUser = JSON.parse(localStorage.getItem('user'))

  constructor(public router: Router,
    public notify: notifyService,
    public toursService: ToursService
  ) { }

  ngOnInit(): void {
    // this.toursService.getTours()
    // .subscribe((data: any) => {
     
    //   this.allTours = data.tours
    // }, err => console.log(err))
  }

  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }
  getData(ev) {
    this.getFromView.forEach(tour => {
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
    this.getFromView.splice(tourId, 1)
    this.toursService.deleteTour(tourId).subscribe(() => this.notify.showInfo('tour deleted!'),
      err => this.notify.showError(err))
  }
}
