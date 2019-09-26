import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarDropdownDirective } from './header/nav-bar-dropdown.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {AppRouter} from './app-router';
import { AuthComponent } from './auth/auth.component';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { NewPopUpDirective } from './shared/new-pop-up.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActiveTweetsComponent } from './active-tweets/active-tweets.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {Http_InterceptorInterceptor} from './shared/http_Interceptor.interceptor';
import {ActiveTweetItemComponent} from './active-tweets/active-tweet-item/active-tweet-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarDropdownDirective,
    DashboardComponent,
    AuthComponent,
    NewTweetComponent,
    NewPopUpDirective,
    ActiveTweetsComponent,
    ActiveTweetItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouter,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: Http_InterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [NewTweetComponent]
})
export class AppModule { }
