import { Injectable } from "@angular/core";
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable() 

export class UsersService extends BaseService {
    url
    constructor(
        public http: HttpClient
    ) {
        super('users')
    }

    updateUser(id:string, data: User) {
        return this.http.patch(`${this.url}/${id}`, data, this.getOptionsWithToken())
    }
    updatePassword(data: User) {
        return this.http.patch(`${this.url}/changePassword`, data, this.getOptionsWithToken())
    }
}