import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ErrorBlackComponent } from './error-black/error-black.component';
import { ErrorComponent } from './error/error.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { SigninupComponent } from './signinup/signinup.component';

const routes: Routes = [

  {path: 'feed', component: FeedComponent},
  {path: 'articles/:articleId', component: ArticleComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'error404', component: ErrorComponent},
  {path: 'error404black', component: ErrorBlackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SigninupComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


