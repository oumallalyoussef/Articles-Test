import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  
  isAuth : boolean = false;
  submitted : boolean = false;
  //id de l'article
  id : any;

  article:  Article;
  userPost : User;
  currentUser : User;
  savedComment : Comment ;

  comment  = {
    postId : null,
    name : '',
    email : '',
    body : ''
  }
  comments : Comment[];
  //email-input
  loginEmail = {
    email : ''
  }


  constructor(

    private route : ActivatedRoute,
    private articleService : ArticleService,  
    private commentService : CommentService,
    private userService : UserService
    ){ 

  }

  ngOnInit() {
    // Get id from params :       
    this.route.params.subscribe( p => {
      console.log(p.id);
      this.id = p.id;
    })

    // get article et les commentaires :
    this.getData(this.id);
  
  }

  getData(postId : any){
    this.getArticleById(postId);
    this.getComments(postId);
  }

  getArticleById(id :any ){
    return this.articleService.getById(id)
    .subscribe(article => this.article = article);
  }

  getUserById(id : any){
    return this.userService.getById(id).subscribe(user => this.userPost = user);
  }

  getComments(id : any){
    return this.commentService.getByPost(id).subscribe(comments => {
      this.comments = comments;
    })
  }

  findUserByEmail(email : any){
    return this.userService.getAll().subscribe(users =>{
      users.map(u =>{
        if(u.email === email){
          this.currentUser = u;
          this.isAuth = true;
          this.submitted = false;
          console.log("user",this.currentUser);
        }
      })
    })
  }

  login(){
    this.submitted = true;
    this.findUserByEmail(this.loginEmail.email);
  }

  resetComment(){
    this.comment =  {
      postId : null,
      name : '',
      email : '',
      body : ''
    }
  }

  setCommentToPost(){

    this.comment.postId = this.article.id;
    this.comment.email = this.currentUser.email;
    
    return this.commentService.save(this.comment).subscribe(res => {
      this.savedComment = res;
      console.log("saved-comment", this.savedComment);
      this.resetComment();
    });

  }
}