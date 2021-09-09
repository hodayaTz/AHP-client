import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettlementComponent } from './settlement/settlement.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteersDetailsComponent } from '../../../volunteers/volunteers-details/volunteers-details.component';
import { SettlementDetailsComponent } from '../../../settlement/settlement-details/settlement-details.component';

const ROUTES: Routes = [
  {path:"settlements/:id" ,component:SettlementComponent},
  {path:"volunteers/:id" ,component:VolunteerComponent},
  {path:"editVolunteer/:id" ,component:VolunteersDetailsComponent},
  {path:"editSettlement/:id" ,component:SettlementDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class OpenSchedulingRoutingModule { }