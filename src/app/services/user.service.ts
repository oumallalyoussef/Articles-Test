import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com';
  
  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get<User[]>(this.url+"/users");
  }

  getById(id : any ){
    return this.http.get<User>(this.url+"/users/" + id);
  }
  
}
