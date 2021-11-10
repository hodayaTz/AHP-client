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
import { NavComponent } from './nav/nav.component';
import { HistoryModule } from './history/history.module';



@NgModule({
  declarations: [
ManagementBasicDesignComponent,MenuDesignComponent,NavComponent
  ],
  imports: [
    CommonModule,ManagamentRoutingModule,
    MaterialModule,HistoryModule ]
})
export class ManagementModule { }
