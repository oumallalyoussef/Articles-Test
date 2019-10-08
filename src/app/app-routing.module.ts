import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create' },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'articles', component: ArticlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
