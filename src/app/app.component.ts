import { Component, OnInit } from '@angular/core';
import { RouteService } from './core/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  exclusive: boolean;

  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.routeService.getRouteData()
      .subscribe(routeData => {
        this.exclusive = routeData && routeData.exclusive;
      });
  }

}
