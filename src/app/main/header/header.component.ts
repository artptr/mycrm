import { Component, EventEmitter, Output } from '@angular/core';

import { SidebarService } from '../../core/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private sidebarService: SidebarService) { }

  @Output() toggleCollapse = new EventEmitter();

  handleCollapseToggler(event: MouseEvent) {
    event.preventDefault();
    this.sidebarService.toggleCollapse();
  }

}
