import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettlementComponent } from './settlement/settlement.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteersDetailsComponent } from '../../../volunteers/volunteers-details/volunteers-details.component';
import { SettlementDetailsComponent } from '../../../settlement/settlement-details/settlement-details.component';
import { OpenScedulingBasicComponent } from './open-sceduling-basic/open-sceduling-basic.component';

const ROUTES: Routes = [
  {path:"",component:OpenScedulingBasicComponent,pathMatch:"full"},
  {path:"settlements/:id" ,component:SettlementComponent},
  {path:"volunteers/:id" ,component:VolunteerComponent},
  {path:"editVolunteer/:id" ,component:VolunteersDetailsComponent},
  {path:"editSettlement/:id" ,component:SettlementDetailsComponent},
  {path:"actualScheduling/:id",loadChildren: () => import("./actual-scheduling/actual-scheduling.module").then(m=>m.ActualSchedulingModule)}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class OpenSchedulingRoutingModule { }