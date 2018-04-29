import { NgModule } from '@angular/core';
import { Data, Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CustomersComponent } from './modules/customers/customers.component';

export interface AppRouteData extends Data {
  title: string;
  icon: string;
}

export interface AppRoute extends Route {
  data?: AppRouteData;
}

export declare type AppRoutes = AppRoute[];

export const ROUTES: AppRoutes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { icon: 'area-chart', title: 'Dashboard' } },
  { path: 'customers', component: CustomersComponent, data: { icon: 'address-book-o', title: 'Customers' } }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRouterModule { }
