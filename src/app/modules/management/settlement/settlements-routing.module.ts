import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationSettlementComponent } from '../../login-users/registration-settlement/registration-settlement.component';
import { SettlementDetailsComponent } from './settlement-details/settlement-details.component';
import { SettlementsListComponent } from './settlements-list/settlements-list.component';
import { HistoryComponent } from '../history/history/history.component';

const routes: Routes = [
  { path: "", component: SettlementsListComponent ,pathMatch:"full"},
  { path: "detailsSettlement/:id", component: SettlementDetailsComponent },
  { path: "addSettlement", component: RegistrationSettlementComponent },
  {path:"history/:settlement",component:HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettlementsRoutingModule { }
