import { Injectable } from "@angular/core";
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { UploadService } from './uploadService'

@Injectable() 

export class UsersService extends BaseService {
    url
    constructor(
        public http: HttpClient,
        public uploadService: UploadService
    ) {
        super('users')
    }

    updateUser(id:string, data: User, image) {
        let toSend
        if(image) {
        toSend = this.uploadService.uploadWithImage(id, data, image, 'profilePic')
        } else {
            toSend = data
        }
        return this.http.patch(`${this.url}/${id}`, toSend, this.getToken())
    }
    updatePassword(data: User) {
        return this.http.patch(`${this.url}/changePassword`, data, this.getOptionsWithToken())
    }
    deleteAccount(id) {
        return this.http.delete(`${this.url}/${id}`, this.getOptionsWithToken())
    }
}