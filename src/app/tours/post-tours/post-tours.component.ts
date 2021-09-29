import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/models/tour.model';
import { ToursService } from 'src/app/services/tours.service';
import { notifyService } from 'src/app/services/toastr.service';
@Component({
  selector: 'app-post-tours',
  templateUrl: './post-tours.component.html',
  styleUrls: ['./post-tours.component.css']
})
export class PostToursComponent implements OnInit {
  tour
  submitting = false
  selectedFile
  constructor(
    public toursService: ToursService,
    public notfiy: notifyService
  ) { }

  ngOnInit(): void {
    this.tour = new Tour({})
  }
  
  onFileSelected(ev) {
    // this.selectedFile = <File>ev.target.files[0]
    // console.log(this.selectedFile)
    let file: File = ev.target.files[0]
    this.readAsBase64(file)
    .then(result => this.selectedFile = result)
    .catch(e => console.log(e))

    }

    readAsBase64(file) {
      let reader = new FileReader()
      return new Promise((res, rej) => {
        reader.addEventListener('load', () => res(reader.result))
        reader.addEventListener('error', e => rej(e))
        reader.readAsDataURL(file)
      })
    }

  createTour() {
    let body
    if(!this.selectedFile) {
      body = {
        tour: this.tour
      }
    } else {
      body = {
        tour: this.tour,
        image: this.selectedFile
      }
    }
    this.submitting = true
    this.toursService.postTour(body)
    .subscribe(() => {
      this.notfiy.showSuccess('tour created!')
      this.submitting= false
    },
     err => {
       this.notfiy.showError(err)
       this.submitting= false
     })
  }
}
