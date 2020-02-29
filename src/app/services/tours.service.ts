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

    uploadWhich(id, data, images) {
        let toUpload
        if (images.length > 1) {
            toUpload = this.uploadService.uploadWithImage(id, data, images, 'images')
        }
        else {
            toUpload = this.uploadService.uploadWithImage(id, data, images, 'imageCover')
        }
        return toUpload
}

    getTours(limit: number, page: number) {
        let queryParams = `?page=${page}&limit=${limit}`
        return this.http.get(this.url + queryParams, this.getOptionsWithToken())
    }

    getTour(tourId: string) {
        return this.http.get(`${this.url}/${tourId}`, this.getOptionsWithToken())
    }

    postTour(data: Tour, images) {
        let id = undefined
        let toSend
        if(images) {
        toSend = this.uploadWhich(id, data, images)
        } else {
            toSend = data
        }
        return this.http.post(this.url, toSend, this.getToken())
    }

    updateTour(tourId: string, data: Tour, images) {
        let toSend
        if(images) {
        toSend = this.uploadWhich(tourId, data, images) 
        } else {
            toSend = data
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