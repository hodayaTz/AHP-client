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



@NgModule({
  declarations: [OpenScedulingBasicComponent,SettlementComponent,VolunteerComponent],
  imports: [
    CommonModule,OpenSchedulingRoutingModule,MaterialModule,RouterModule
  ],
  providers:[OpenSchedulingService,SchedulingService]
})
export class OpenSchedulingModule { }
