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
  tourFirstName
  tourLastName
  AllImages = []
  selectedFiles = null
  submitting = false
  imageUrl
  user = JSON.parse(localStorage.getItem('user'))
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
        this.tourFirstName = `${result.tour.name.split(' ')[0]} ${result.tour.name.split(' ')[1]}`
        this.tourLastName = result.tour.name.split(' ')[2]
      }, err => this.notify.showError(err))
  }

  onFilesSelected(ev) {
    // console.log(ev.target.files) => FileList
    for (let i = 0; i < ev.target.files.length; i++) {
      this.AllImages.push(ev.target.files[i])
    }
    console.log(this.AllImages)
  }
  uploadMultiple(data) {
    this.submitting = true
    this.toursService.updateTour(this.activatedRoute.snapshot.params.id, data, this.AllImages)
      .subscribe(() => {
        this.notify.showSuccess('all files uploaded!')
        this.submitting = false
      }, err => {
        this.notify.showError(err)
        this.submitting = false
      })
  }
}
