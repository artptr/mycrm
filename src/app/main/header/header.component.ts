import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleCollapse = new EventEmitter();

  handleCollapseToggler(event: MouseEvent) {
    event.preventDefault();
    this.toggleCollapse.emit();
  }

}
