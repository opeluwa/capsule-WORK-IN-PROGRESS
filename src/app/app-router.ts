import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ActiveTweetsComponent} from './active-tweets/active-tweets.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './shared/auth.guard';
import {AuthLoginGuard} from './shared/authLogin.guard';
import {ActiveTweetsResolver} from './active-tweets/activeTweets.resolver';

const appRoutes: Routes = [{path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
                          {path: 'Dashboard', canActivate: [AuthGuard], component: DashboardComponent},
  {path: 'Active', resolve: [ActiveTweetsResolver], canActivate: [AuthGuard], component: ActiveTweetsComponent},
  {path: 'Auth', canActivate: [AuthLoginGuard], component: AuthComponent},
  {path: '**', redirectTo: 'Dashboard'}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouter {
}
