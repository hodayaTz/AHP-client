import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLogInComponent } from './management-log-in/management-log-in.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  PasswordsService } from './passwords.service';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [ManagementLogInComponent],
  imports: [
    CommonModule,HttpClientModule,MaterialModule
  ],
  providers:[PasswordsService]
})
export class ManagementLogInModule { }
