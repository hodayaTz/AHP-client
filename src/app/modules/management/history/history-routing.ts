import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VolunteersDetailsComponent } from '../volunteers/volunteers-details/volunteers-details.component';
import { SettlementDetailsComponent } from '../settlement/settlement-details/settlement-details.component';

const routes: Routes = [
    {path:"editVolunteer/:id" ,component:VolunteersDetailsComponent},
    {path:"editSettlement/:id" ,component:SettlementDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettlementsRoutingModule { }
