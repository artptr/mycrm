import { NgModule } from '@angular/core';
import { Data, Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

export interface AppRouteData extends Data {
  title: string;
  icon: string;
}

export interface AppRoute extends Route {
  data?: AppRouteData;
}

export declare type AppRoutes = AppRoute[];

export const ROUTES: AppRoutes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
