import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SettlementsListComponent } from './settlements-list/settlements-list.component';
import { SettlementService } from './settlement.service';
import { SettlementsRoutingModule } from './settlements-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// SettlementsListComponent
@NgModule({
  declarations: [],
  imports: [
    CommonModule,SettlementsRoutingModule,MaterialModule,ReactiveFormsModule,FormsModule
  ],
  providers:[SettlementService]
})
export class SettlementModule { }
