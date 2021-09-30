import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/services/tours.service';
import { ActivatedRoute } from '@angular/router';
import { notifyService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-tours-details',
  templateUrl: './tours-details.component.html',
  styleUrls: ['./tours-details.component.css']
})
export class ToursDetailsComponent implements OnInit {
  tour
  AllImages = []
  selectedFiles 
  submitting = false
  lat: number 
  lng: number 
  public user = JSON.parse(localStorage.getItem('user'))
  constructor(
    public toursService: ToursService,
    public activatedRoute: ActivatedRoute,
    public notify: notifyService
  ) {

  }
  ngOnInit(): void {
    this.toursService.getTour(this.activatedRoute.snapshot.params.id)
      .subscribe((result: any) => {
        this.tour = result.tour  
        result.tour.locations.forEach(loc => {
          this.lat = loc.coordinates[0]
          this.lng = loc.coordinates[1]
          console.log(this.lat, this.lng)
        })      
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
    const formData = new FormData()
    this.AllImages.forEach(image => formData.append('images', image))
    // let body = {
    //   images: this.AllImages
    // }
    this.submitting = true
    this.toursService.updateTour(this.activatedRoute.snapshot.params.id, formData)
      .subscribe((res: any) => {
        this.submitting = false
        this.notify.showSuccess('all files uploaded!')
      }, err => {
        this.notify.showError(err)
        this.submitting = false
      })
  }
}
