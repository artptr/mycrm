import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { MainRoutingModule } from '../main/main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: []
})
export class SharedModule { }
