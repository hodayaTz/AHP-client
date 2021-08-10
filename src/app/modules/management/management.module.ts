import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysModule } from './holidays/holidays.module';
import { SettlementModule } from './settlement/settlement.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { ManagamentRoutingModule } from './management-routing.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { ManagementBasicDesignComponent } from './management-basic-design/management-basic-design.component';
import { MaterialModule } from 'src/app/material.module';
import { MenuDesignComponent } from './menu-design/menu-design.component';
import { OpenSchedulingModule } from './scheduling/open-scheduling/open-scheduling.module';
import { OpenScedulingBasicComponent } from '../../open-sceduling-basic/open-sceduling-basic.component';
import { SettlementComponent } from '../../settlement/settlement.component';
import { VolunteerComponent } from '../../volunteer/volunteer.component';



@NgModule({
  declarations: [
    ManagementBasicDesignComponent,
    MenuDesignComponent,
    OpenScedulingBasicComponent,
    SettlementComponent,
    VolunteerComponent
  ],
  imports: [
    CommonModule,HolidaysModule,SettlementModule,VolunteersModule,ManagamentRoutingModule,SchedulingModule,
    MaterialModule,
    OpenSchedulingModule
  ]
})
export class ManagementModule { }
