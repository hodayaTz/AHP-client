import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysModule } from './holidays/holidays.module';
import { SettlementModule } from './settlement/settlement.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { ManagamentRoutingModule } from './management-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HolidaysModule,SettlementModule,VolunteersModule,ManagamentRoutingModule
  ]
})
export class ManagementModule { }
