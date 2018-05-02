import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SidebarService } from '../core/sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  collapsed: boolean;

  private collapsingSubscription: Subscription;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.collapsingSubscription = this.sidebarService.getCollapsed()
      .subscribe(collapsed => {
        this.collapsed = collapsed;
      });
  }

  ngOnDestroy() {
    this.collapsingSubscription.unsubscribe();
  }

}
