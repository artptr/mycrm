import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AppRouteData } from '../../app-routing.module';
import { RouteService } from '../../core/route.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  routeData: AppRouteData;

  private routeSubscription: Subscription;

  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.routeSubscription = this.routeService.getRouteData()
      .subscribe(routeData => {
        this.routeData = routeData;
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
