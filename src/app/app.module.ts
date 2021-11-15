import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsersModule } from './modules/login-users/login-users.module';
import { ManagementModule } from './modules/management/management.module';
import { ManagementLogInComponent } from './modules/management-log-in/management-log-in/management-log-in.component';
import { SettlementsListComponent } from './modules/management/settlement/settlements-list/settlements-list.component';
import { VolunteersListComponent } from './modules/management/volunteers/volunteers-list/volunteers-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ManagementLogInModule } from './modules/management-log-in/management-log-in.module';



@NgModule({
  declarations: [
    AppComponent,
    // ManagementLogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginUsersModule,
    BrowserAnimationsModule,ManagementLogInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
