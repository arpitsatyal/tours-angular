import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToursService } from 'src/app/services/tours.service';
import { notifyService } from 'src/app/services/toastr.service';
import { PageEvent } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-get-tours',
  templateUrl: './get-tours.component.html',
  styleUrls: ['./get-tours.component.css']
})
export class GetToursComponent implements OnInit {
  allTours
  msg: any
  page = 1
  total = 0
  limit = 6
  imagePath
  pageSizeOptions = [1,2,3,4]
  user = JSON.parse(localStorage.getItem('user'))
  @Input() inputData: any
  @Output() searchagain = new EventEmitter()
  constructor(
    public router: Router,
    public toursService: ToursService,
    public notify: notifyService

    ) { 
    this.imagePath = environment.imageUrl + '/tours/'

    }

  ngOnInit(): void {
    this.toursService.getTours(this.limit, this.page)
      .subscribe((data: any) => {
        if(this.inputData) {
          this.allTours = this.inputData
        } else {
        this.allTours = data.tours
        this.total = data.numTours
        this.pageSizeOptions.push(data.numTours)
        }
      }, err => this.notify.showError(err))
  }
  deleteTour(tourId) {
    this.allTours.splice(tourId, 1)
    this.toursService.deleteTour(tourId).subscribe(() => this.notify.showInfo('tour deleted!'),
      err => this.notify.showError(err))
  }
  searchAgain() {
    this.searchagain.emit()
  }
  onPageChange(pageData: PageEvent) {
    this.limit = pageData.pageSize
    this.page = pageData.pageIndex + 1
    this.toursService.getTours(this.limit, this.page).subscribe((res:any) => {
      this.allTours = res.tours
    }, err => this.notify.showError(err))
  }
}
 