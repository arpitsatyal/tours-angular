import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToursService } from 'src/app/services/tours.service';
import { notifyService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-get-tours',
  templateUrl: './get-tours.component.html',
  styleUrls: ['./get-tours.component.css']
})
export class GetToursComponent implements OnInit {
  allTours
  msg: any
  user = JSON.parse(localStorage.getItem('user'))
  @Input() inputData: any
  @Output() searchagain = new EventEmitter()
  constructor(
    public router: Router,
    public toursService: ToursService,
    public notify: notifyService
  ) { }

  ngOnInit(): void {
    this.toursService.getTours()
      .subscribe((data: any) => {
        if(this.inputData) {
          this.allTours = this.inputData
        } else {
        this.allTours = data.tours
        }
      }, err => console.log(err))
  }
  deleteTour(tourId) {
    this.allTours.splice(tourId, 1)
    this.toursService.deleteTour(tourId).subscribe(() => this.notify.showInfo('tour deleted!'),
      err => this.notify.showError(err))
  }
  searchAgain() {
    this.searchagain.emit()
  }
}
