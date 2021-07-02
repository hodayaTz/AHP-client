import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysModule } from './holidays/holidays.module';
import { SettlementModule } from './settlement/settlement.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HolidaysModule,SettlementModule
  ]
})
export class ManagementModule { }
