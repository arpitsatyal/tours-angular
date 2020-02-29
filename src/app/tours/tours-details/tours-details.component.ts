import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/services/tours.service';
import { ActivatedRoute } from '@angular/router';
import { notifyService } from 'src/app/services/toastr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tours-details',
  templateUrl: './tours-details.component.html',
  styleUrls: ['./tours-details.component.css']
})
export class ToursDetailsComponent implements OnInit {
  tour

  AllImages = []
  selectedFiles = null
  submitting = false
  imageUrl
  startDate
  public user = JSON.parse(localStorage.getItem('user'))
  constructor(
    public toursService: ToursService,
    public activatedRoute: ActivatedRoute,
    public notify: notifyService
  ) {
    this.imageUrl = environment.imageUrl + '/tours'
  }

  ngOnInit(): void {
    this.toursService.getTour(this.activatedRoute.snapshot.params.id)
      .subscribe((result: any) => {
        this.tour = result.tour        
      }, err => this.notify.showError(err))
  }

  onFilesSelected(ev) {
    // console.log(ev.target.files) => FileList
    for (let i = 0; i < ev.target.files.length; i++) {
      this.AllImages.push(ev.target.files[i])
    }
    console.log(this.AllImages)
  }
  uploadMultiple() {
    this.submitting = true
    this.toursService.updateTour(this.activatedRoute.snapshot.params.id, this.tour, this.AllImages)
      .subscribe((res: any) => {
        this.tour.images = res.tour.images
        this.notify.showSuccess('all files uploaded!')
        this.submitting = false
      }, err => {
        this.notify.showError(err)
        this.submitting = false
      })
  }
}
