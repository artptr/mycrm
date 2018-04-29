import { NgModule } from '@angular/core';
import { Data, Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';

export interface AppRouteData extends Data {
  exclusive?: boolean;
  title?: string;
  icon?: string;
}

export interface AppRoute extends Route {
  data?: AppRouteData;
}

export declare type AppRoutes = AppRoute[];

export const ROUTES: AppRoutes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { exclusive: true } },
  { path: 'dashboard', component: DashboardComponent, data: { icon: 'area-chart', title: 'Dashboard' } },
  { path: 'customers', component: CustomersComponent, data: { icon: 'address-book-o', title: 'Customers' } }
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
