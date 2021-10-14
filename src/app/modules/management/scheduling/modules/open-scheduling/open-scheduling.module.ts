import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenSchedulingRoutingModule } from './open-scheduling-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { OpenSchedulingService } from './open-scheduling.service';
import { SchedulingService } from '../../scheduling.service';
import { RouterModule } from '@angular/router';
import { OpenScedulingBasicComponent } from './open-sceduling-basic/open-sceduling-basic.component';
import { SettlementComponent } from './settlement/settlement.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DetailsVolunteerToHolidayComponent } from './details-volunteer-to-holiday/details-volunteer-to-holiday.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailsSettlementToHolidayComponent } from './details-settlement-to-holiday/details-settlement-to-holiday.component';
import { ActualSchedulingModule } from './actual-scheduling/actual-scheduling.module';



@NgModule({
  declarations: [SettlementComponent,VolunteerComponent,DetailsVolunteerToHolidayComponent,DetailsSettlementToHolidayComponent,OpenScedulingBasicComponent],
  imports: [
    CommonModule,OpenSchedulingRoutingModule,MaterialModule,RouterModule,ReactiveFormsModule,FormsModule,
    ActualSchedulingModule
  ],
  providers:[OpenSchedulingService,SchedulingService]
})
export class OpenSchedulingModule { }
