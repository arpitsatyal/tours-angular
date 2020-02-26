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
  }

  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }
  getData(ev) {
    this.getFromView.forEach(tour => {
      var splitted = tour.name.split(' ')
      let name
      if(splitted.length === 1) {
        name = tour.name
      } else if(splitted.length > 1) {
      name = splitted[0] + ' ' + splitted[1]
      }
      if (name === ev.target.value) {
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
