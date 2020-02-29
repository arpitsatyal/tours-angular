import { Injectable } from "@angular/core";
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ReviewService extends BaseService{
    url
    constructor(public http: HttpClient) {
        super('tours')
    }
    getReview(tourId) {
        return this.http.get(`${this.url}/${tourId}/reviews`, this.getOptionsWithToken())
    }
}