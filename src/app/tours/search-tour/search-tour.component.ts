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
  public results = []
  constructor(
    public notify: notifyService,
    public toursService: ToursService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.toSearch = new Tour({})
  }

  search() {
    this.submitting = true
    this.toursService.searchTours(this.toSearch)
    .subscribe((data: any) => {
      this.submitting = false
      this.results = data.searched
      this.notify.showSuccess('found!!')
    }, err => {
      this.notify.showError(err)
      this.submitting = false
    })
  }
  resetSearch() {
    this.results.length = 0
  }
}
