import { Injectable } from "@angular/core";
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

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
}