import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettlementsListComponent } from './settlements-list/settlements-list.component';
import { SettlementService } from './settlement.service';



@NgModule({
  declarations: [SettlementsListComponent],
  imports: [
    CommonModule
  ],
  providers:[SettlementService]
})
export class SettlementModule { }
