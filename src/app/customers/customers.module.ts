import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CustomersComponent
  ]
})
export class CustomersModule { }
