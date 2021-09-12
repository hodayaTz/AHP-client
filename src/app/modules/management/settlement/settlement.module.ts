import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SettlementsListComponent } from './settlements-list/settlements-list.component';
import { SettlementService } from './settlement.service';
import { SettlementsRoutingModule } from './settlements-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettlementDetailsComponent } from './settlement-details/settlement-details.component';
import { SettlementsListComponent } from './settlements-list/settlements-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


// SettlementsListComponent
@NgModule({
  declarations: [SettlementDetailsComponent,SettlementsListComponent],
  imports: [
    CommonModule,SettlementsRoutingModule,MaterialModule,ReactiveFormsModule,FormsModule, HttpClientModule,RouterModule
  ],
  providers:[SettlementService],
  // exports:[MaterialModule]
})
export class SettlementModule { }
