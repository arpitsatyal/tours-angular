import { Injectable } from "@angular/core";
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Tour } from '../models/tour.model';
import { UploadService } from './uploadService'

@Injectable()

export class ToursService extends BaseService {
    url
    constructor(
        public http: HttpClient,
        public uploadService: UploadService
    ) {
        super('tours')
    }

    getTours(limit: number, page: number) {
        let queryParams = `?page=${page}&limit=${limit}`
        return this.http.get(this.url + queryParams, this.getOptionsWithToken())
    }
    getTour(tourId: string) {
        return this.http.get(`${this.url}/${tourId}`, this.getOptionsWithToken())
    }
    postTour(data: Tour, image) {
        let id = undefined
        let toSend
        if (image.length > 1) {
            toSend = this.uploadService.uploadWithImage(id, data, image, 'images')
        } else {
            toSend = this.uploadService.uploadWithImage(id, data, image, 'imageCover')
        }
        return this.http.post(this.url, toSend, this.getToken())
    }
    updateTour(tourId: string, data: Tour, image) {
        let toSend
        if (image.length > 1) {
            toSend = this.uploadService.uploadWithImage(tourId, data, image, 'images')
        } else {
            toSend = this.uploadService.uploadWithImage(tourId, data, image, 'imageCover')
        }
        return this.http.patch(`${this.url}/${tourId}`, toSend, this.getToken())
    }
    deleteTour(tourId: string) {
        return this.http.delete(`${this.url}/${tourId}`, this.getOptionsWithToken())
    }
    searchTours(data: Tour) {
        return this.http.post(`${this.url}/search`, data, this.getOptionsWithToken())
    }
}