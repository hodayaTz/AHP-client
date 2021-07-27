import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenSchedulingListComponent } from './open-scheduling-list/open-scheduling-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SchedulingService } from './scheduling.service';
import { NewSchedulingHolidayComponent } from './new-scheduling-holiday/new-scheduling-holiday.component';
import { SchedulingRoutingModule } from './scheduling-routing.module';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    OpenSchedulingListComponent,NewSchedulingHolidayComponent
  ],
  imports: [
    CommonModule,HttpClientModule,RouterModule,ReactiveFormsModule,FormsModule,SchedulingRoutingModule,MaterialModule
  ],
  providers:[SchedulingService]
})
export class SchedulingModule { }
