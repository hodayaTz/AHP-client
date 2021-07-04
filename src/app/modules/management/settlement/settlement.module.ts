import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettlementsListComponent } from './settlements-list/settlements-list.component';
import { SettlementService } from './settlement.service';
import { SettlementsRoutingModule } from './settlements-routing.module';


// SettlementsListComponent
@NgModule({
  declarations: [],
  imports: [
    CommonModule,SettlementsRoutingModule
  ],
  providers:[SettlementService]
})
export class SettlementModule { }
