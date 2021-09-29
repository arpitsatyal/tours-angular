import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { notifyService } from 'src/app/services/toastr.service';
import { ToursService } from 'src/app/services/tours.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  matchedTour = []
  allTours = []
  @Output() giveToChild = new EventEmitter()
  loggedInUser = JSON.parse(localStorage.getItem('user'))
  
constructor(public router: Router,
  public notify: notifyService,
  public toursService: ToursService
) {}
 
ngOnInit(): void {
  this.toursService.getTours().subscribe((data: any) => this.allTours = data.tours, err => this.notify.showError(err))
}

logout() {
  localStorage.clear()
  this.router.navigate([''])
}

getData(ev) {
  this.allTours.forEach(tour => {
    let xa = tour.name.split(' ')
    let n = xa[0]
    // console.log(n, ev.target.value)
    if (n === ev.target.value) {
      this.matchedTour.push(tour)
      this.giveToChild.emit(this.matchedTour)
    } else if (ev.key === 'Backspace') {
      this.matchedTour = []
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
