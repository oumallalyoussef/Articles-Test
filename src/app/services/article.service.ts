import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  url_posts = 'https://jsonplaceholder.typicode.com/posts/';
  

  constructor(private http : HttpClient) { 
  }

  getAll(){
    return this.http.get<Article[]>(this.url_posts)
  }

  getById(id : any ){
    return this.http.get<Article>(this.url_posts + id);
  }
}