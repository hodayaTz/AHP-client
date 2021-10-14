import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SchedulingService } from './scheduling.service';
import { SchedulingRoutingModule } from './scheduling-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NewSchedulingHolidayComponent } from './components/new-scheduling-holiday/new-scheduling-holiday.component';
import { OpenSchedulingModule } from './modules/open-scheduling/open-scheduling.module';
import { OpenSchedulingListComponent } from './components/open-scheduling-list/open-scheduling-list.component';
import { HolidaysService } from '../holidays/holidays-service.service';



@NgModule({
  declarations: [
    NewSchedulingHolidayComponent,
    OpenSchedulingListComponent
  ],
  imports: [
    CommonModule,HttpClientModule,RouterModule,ReactiveFormsModule,FormsModule,SchedulingRoutingModule,MaterialModule,
    OpenSchedulingModule,MaterialModule,RouterModule
  ],
  providers:[SchedulingService,HolidaysService]
})
export class SchedulingModule { }
