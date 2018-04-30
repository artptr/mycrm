import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidebarService {

  collapsed: BehaviorSubject<boolean>;

  constructor() {
    this.collapsed = new BehaviorSubject(false);
  }

  toggleCollapse() {
    this.collapsed.next(!this.collapsed.getValue());
  }

  getCollapsed(): Observable<boolean> {
    return this.collapsed;
  }

}
