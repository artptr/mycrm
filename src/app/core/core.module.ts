import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SidebarService } from './sidebar.service';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    SidebarService
  ],
  declarations: []
})
export class CoreModule { }
