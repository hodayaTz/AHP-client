import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettlementDetailsComponent } from './settlement-details/settlement-details.component';
import { SettlementsListComponent } from './settlements-list/settlements-list.component';

const routes: Routes = [
  {path:"settlementList" ,component:SettlementsListComponent},
  {path:"detailsSettlement",component:SettlementDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettlementsRoutingModule { }
