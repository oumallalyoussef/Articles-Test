import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://jsonplaceholder.typicode.com/comments';
  
  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get<Comment[]>(this.url)
  }

  getById(id : any ){
    return this.http.get<Comment>(this.url+'/'+id)
  }

  getByPost(postId : any){
    
    console.log('https://jsonplaceholder.typicode.com/posts/' +postId+'/comments')
    return this.http.get<Comment[]>(this.url +'?postId='+ postId) 
  }

  save(comment : any){
    return this.http.post<Comment>(this.url, comment);  
  }

}