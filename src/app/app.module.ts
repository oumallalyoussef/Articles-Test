import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';

import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      
      {path : 'article/:id', component : ArticleComponent },
      {path : '', component : ArticlesComponent }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
