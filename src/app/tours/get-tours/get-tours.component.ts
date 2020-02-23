import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToursService } from 'src/app/services/tours.service';

@Component({
  selector: 'app-get-tours',
  templateUrl: './get-tours.component.html',
  styleUrls: ['./get-tours.component.css']
})
export class GetToursComponent implements OnInit {
  allTours
  constructor(
    public router: Router,
    public toursService: ToursService
  ) { }

  ngOnInit(): void {
    this.toursService.getTours()
    .subscribe((data:any) => {
      this.allTours = data.tours
    }, err => console.log(err))
  }
}
