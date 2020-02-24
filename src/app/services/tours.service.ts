import { Injectable } from "@angular/core";
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Tour } from '../models/tour.model';

@Injectable()

export class ToursService extends BaseService {
    url
constructor(
    public http: HttpClient
) {
    super('tours')
}
    getTours() {
        return this.http.get(this.url, this.getOptionsWithToken())
    }
    getTour(tourId: string) {
        return this.http.get(`${this.url}/${tourId}`, this.getOptionsWithToken())
    }
    postTour(data: Tour) {
        return this.http.post(this.url, data, this.getOptionsWithToken())
    }
    deleteTour(tourId: string) {
        return this.http.delete(`${this.url}/${tourId}`,this.getOptionsWithToken())
    }
}