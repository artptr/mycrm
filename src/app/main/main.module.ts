import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
