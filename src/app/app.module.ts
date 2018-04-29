import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomersModule } from './customers/customers.module';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    MainModule,
    LoginModule,
    DashboardModule,
    CustomersModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
