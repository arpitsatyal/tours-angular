import { Injectable } from "@angular/core";
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Tour } from '../models/tour.model';
import { UploadService } from './uploadService'

@Injectable()

export class ToursService extends BaseService {
    url
    constructor(
        public http: HttpClient
            ) {
        super('tours')
    }

    getTours(limit?: number, page?: number) {
        let queryParams = `?page=${page}&limit=${limit}`
        return this.http.get(this.url + queryParams, this.getOptions())
    }

    getTour(tourId: string) {
        return this.http.get(`${this.url}/${tourId}`, this.getOptions())
    }

    postTour(data: Tour) {
        return this.http.post(this.url, data, this.getOptionsWithToken())
    }

    updateTour(tourId: string, body) {     
        return this.http.patch(`${this.url}/${tourId}`,body, this.getOptionsWithToken())
    }
    
    deleteTour(tourId: string) {
        return this.http.delete(`${this.url}/${tourId}`, this.getOptionsWithToken())
    }

    searchTours(data: Tour) {
        return this.http.post(`${this.url}/search`, data, this.getOptions())
    }
}