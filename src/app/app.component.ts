import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { AppRouteData } from './app.router';

const APP_TITLE = 'MyCRM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collapsed = false;
  routeData: AppRouteData;
  titleElement: HTMLTitleElement;

  constructor(private router: Router) {
    this.titleElement = document.querySelector('title');
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        const breadcrumbs = [];

        this.routeData = event.state.root.firstChild.data as AppRouteData;
        this.titleElement.text = `${this.routeData.title} - ${APP_TITLE}`;
      }
    });
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

}
