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

uploadWithImage(id, data, image) {
    let fd = new FormData()
    for(let key in data) {
        fd.append(key, data[key])
    }
    fd.append('imageCover', image, image.name)
    return fd
}
    getTours(limit: number,page: number) {
        let queryParams = `?page=${page}&limit=${limit}`
        return this.http.get(this.url + queryParams, this.getOptionsWithToken())
    }
    getTour(tourId: string) {
        return this.http.get(`${this.url}/${tourId}`, this.getOptionsWithToken())
    }
    postTour(data: Tour, image) {
        let id = undefined
        let toSend = this.uploadWithImage(id, data, image)
        return this.http.post(this.url, toSend, this.getToken())
    }
    updateTour(tourId: string, data: Tour, image) {
        let toSend = this.uploadWithImage(tourId, data, image)
        return this.http.patch(`${this.url}/${tourId}`, toSend, this.getToken())
    }
    deleteTour(tourId: string) {
        return this.http.delete(`${this.url}/${tourId}`,this.getOptionsWithToken())
    }
    searchTours(data: Tour) {
        return this.http.post(`${this.url}/search`, data, this.getOptionsWithToken())
    }
}