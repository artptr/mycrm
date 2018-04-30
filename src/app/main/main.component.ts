import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../core/sidebar.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  collapsingSubscription: Subscription;
  collapsed: boolean;

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
