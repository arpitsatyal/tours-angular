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
  forgotPassword(data: User) {
    return this.http.post(`${this.url}/forgotPassword`, data, this.getOptions())
  }
  resetPassword(token, data: User) {
    return this.http.patch(`${this.url}/resetPassword/${token}`, data, this.getOptions())
  }
  checkUsername(username: User) {
    return this.http.get(`${this.url}/checkUsername/${username}`, this.getOptions())
  }
}
