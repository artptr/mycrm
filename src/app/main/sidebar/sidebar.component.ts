import { Component } from '@angular/core';

import { ROUTES } from '../main-routing.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menu = [];

  constructor() {
    const root = ROUTES[0];
    this.menu = ROUTES[0].children
      .filter(route => route.data)
      .map(route => ({
        path: `/${root.path}/${route.path}`,
        title: route.data.title,
        icon: route.data.icon
      }));
  }

}
