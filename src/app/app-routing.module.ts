import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [

  {path: 'feed', component: FeedComponent},
  {path: 'articles/:articleId', component: ArticleComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


