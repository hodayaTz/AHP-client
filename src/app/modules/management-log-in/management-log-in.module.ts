import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLogInComponent } from './management-log-in/management-log-in.component';
import { HttpClient } from '@angular/common/http';
import { ManagementLogInService } from './management-log-in.service';



@NgModule({
  declarations: [ManagementLogInComponent],
  imports: [
    CommonModule,HttpClient
  ],
  providers:[ManagementLogInService]
})
export class ManagementLogInModule { }
