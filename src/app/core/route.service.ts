import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/multicast';

import { AppRouteData } from '../app-routing.module';
import { Subject } from 'rxjs/Subject';

const appTitle = 'MyCRM';

@Injectable()
export class RouteService {

  private readonly titleElement: HTMLTitleElement;
  private readonly routeData: ConnectableObservable<AppRouteData>;

  constructor(private router: Router) {
    this.titleElement = document.querySelector('title');

    this.routeData = this.router.events
      .filter(event => event instanceof RoutesRecognized)
      .map((event: RoutesRecognized) => event.state.root.firstChild.data as AppRouteData)
      .multicast(new Subject());

    this.routeData.subscribe(({ title }: AppRouteData) => {
      this.titleElement.text = title
        ? `${title} - ${appTitle}`
        : appTitle;
    });

    this.routeData.connect();
  }

  getRouteData(): Observable<AppRouteData> {
    return this.routeData;
  }

}
