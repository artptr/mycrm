import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from '../app-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CustomersComponent } from '../customers/customers.component';

export const ROUTES: AppRoutes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { icon: 'area-chart', title: 'Dashboard' }
        },
      {
        path: 'customers',
        component: CustomersComponent,
        data: { icon: 'address-book-o', title: 'Customers' }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class MainRoutingModule { }
