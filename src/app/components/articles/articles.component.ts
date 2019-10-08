import { Component, OnInit } from '@angular/core';
import {ArticleService} from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  
  articles : any;
  isLoading : boolean = true;
  
  constructor(private articleService : ArticleService, private userService : UserService) {
    this.articles = [];
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(){
    return(
      this.articleService.getAll()
      .subscribe(response => {
        this.articles = response;
        this.isLoading = false; 
      })
    ); 
  }
}