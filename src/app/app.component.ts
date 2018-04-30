import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import { AppRouteData } from './app-routing.module';

const appTitle = 'MyCRM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  routeData: AppRouteData;
  titleElement: HTMLTitleElement;

  constructor(private router: Router) {
    this.titleElement = document.querySelector('title');
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        this.routeData = event.state.root.firstChild.data as AppRouteData;
        const { title } = this.routeData;
        this.titleElement.text = title
          ? `${this.routeData.title} - ${appTitle}`
          : appTitle;
      }
    });
  }

}
