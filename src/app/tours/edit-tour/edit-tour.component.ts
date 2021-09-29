import { Component, OnInit } from '@angular/core';
import { notifyService } from 'src/app/services/toastr.service';
import { ToursService } from 'src/app/services/tours.service';
import { ActivatedRoute } from '@angular/router';
import { Tour } from 'src/app/models/tour.model';
import { FileUploader } from 'ng2-file-upload'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {
  tour
  oldTour
  // uploader: FileUploader = new FileUploader({ url: URL, disableMultipart: true })
  submitting = false
  selectedFile
  public id = this.activatedRoute.snapshot.params.id
  constructor(
    public notify: notifyService,
    public toursService: ToursService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tour = new Tour({})
    this.toursService.getTour(this.id).subscribe((res:any) => this.oldTour = res.tour)
  }

  readAsBase64(file) {
    let reader = new FileReader()
    return new Promise((res, rej) => {
      reader.addEventListener('load', () => res(reader.result))
      reader.addEventListener('error', e => rej(e))
      if(file) reader.readAsDataURL(file)
    })
  }

  onFileSelected(ev) {
    let file: File = ev.target.files[0]
    this.readAsBase64(file)
    .then(result => this.selectedFile = result)
    .catch(e => console.log(e))
  }

  editTour(data) {
    let body
    if(!this.selectedFile) {
      body = {
        tour: data
      }
    } else {
      body = {
        tour: data,
        image: this.selectedFile
      }
    }
    this.submitting = true
    this.toursService.updateTour(this.id, body)
    .subscribe(() => {
      this.notify.showSuccess('tour updated!')
      this.submitting= false
    },
     err => {
       this.notify.showError(err)
       this.submitting= false
     })
  }
}
