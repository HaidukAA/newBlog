import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';
import { ErrorBlackComponent } from './error-black/error-black.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninupComponent } from './signinup/signinup.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { PopularArticlesComponent } from './profile/popular-articles/popular-articles.component';
import { NewestComponent } from './profile/newest/newest.component';
import { ProfileFootherComponent } from './profile/profile-foother/profile-foother.component';
import { BlueComponent } from './profile/blue/blue.component';
import { ReactionComponent } from './reaction/reaction.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    ArticleComponent,
    ErrorComponent,
    ErrorBlackComponent,
    LoginComponent,
    ProfileComponent,
    SigninupComponent,
    UserInfoComponent,
    PopularArticlesComponent,
    NewestComponent,
    ProfileFootherComponent,
    BlueComponent,
    ReactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
