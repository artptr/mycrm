import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SidebarService } from './sidebar.service';
import { RouteService } from './route.service';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    SidebarService,
    RouteService
  ],
  declarations: []
})
export class CoreModule { }
