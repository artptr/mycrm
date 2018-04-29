import { Component } from '@angular/core';
import { AppRoutes, ROUTES } from '../../app-routing.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  routes: AppRoutes;

  constructor() {
    this.routes = ROUTES.filter(route => route.data && !route.data.exclusive);
  }

}
