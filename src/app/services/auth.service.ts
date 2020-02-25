import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient} from '@angular/common/http'
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  url
  constructor(public http: HttpClient) {
    super('users')
  }
  login(data: User) {
    return this.http.post(`${this.url}/login`, data, this.getOptions())
  }
  register(data: User) {
    return this.http.post(`${this.url}/signup`, data, this.getOptions())
  }
}
