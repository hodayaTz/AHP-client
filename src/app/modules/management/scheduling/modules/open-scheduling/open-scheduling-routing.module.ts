import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettlementComponent } from './settlement/settlement.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const ROUTES: Routes = [
  {path:"settlements/:id" ,component:SettlementComponent},
  {path:"volunteers/:id" ,component:VolunteerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class OpenSchedulingRoutingModule { }