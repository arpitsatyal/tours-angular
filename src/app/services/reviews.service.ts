import { Injectable } from "@angular/core";
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review.model';

@Injectable()

export class ReviewService extends BaseService {
    url
    constructor(public http: HttpClient) {
        super('tours')
    }
    getReview(tourId) {
        return this.http.get(`${this.url}/${tourId}/reviews`, this.getOptionsWithToken())
    }
    createReview(tourId, rev: Review) {
        return this.http.post(`${this.url}/${tourId}/reviews`, rev, this.getOptionsWithToken())
    }
}