import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import {  HolidaysService } from './holidays-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HolidaysRoutingModule } from './holidays-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HolidayDetailsComponent,HolidaysListComponent,HolidayDetailsComponent],
  imports: [
    CommonModule,HttpClientModule,RouterModule,HolidaysRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers:[HolidaysService]
})
export class HolidaysModule { }
