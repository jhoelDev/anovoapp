import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getUsers() {
    return this.http.get('http://localhost:8080/api/producto');
  }
  

}
