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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarDropdownDirective,
    DashboardComponent,
    AuthComponent,
    NewTweetComponent,
    NewPopUpDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouter,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewTweetComponent]
})
export class AppModule { }
