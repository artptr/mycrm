import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/multicast';

import { AppRouteData } from '../app-routing.module';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const appTitle = 'MyCRM';

@Injectable()
export class RouteService {

  private readonly titleElement: HTMLTitleElement;
  private readonly routeData: BehaviorSubject<AppRouteData>;

  constructor(private router: Router) {
    this.titleElement = document.querySelector('title');

    this.routeData = new BehaviorSubject(null);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const { root } = this.router.routerState.snapshot;
        const snapshot = getCurrentRouteSnapshot(root);
        const data = snapshot.data as AppRouteData;

        this.routeData.next(data);

        const { title } = data;
        this.titleElement.text = title
          ? `${title} - ${appTitle}`
          : appTitle;
      }
    });
  }

  getRouteData(): Observable<AppRouteData> {
    return this.routeData;
  }

}

function getCurrentRouteSnapshot(root: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  let current = root;

  while (current.firstChild) {
    current = current.firstChild;
  }

  return current;
}
