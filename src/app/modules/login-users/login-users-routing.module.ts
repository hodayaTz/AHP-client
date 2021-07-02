import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationVolunteersComponent } from './registration-volunteers/registration-volunteers.component';
import { RegistrationSettlementComponent } from './registration-settlement/registration-settlement.component';

const routes: Routes = [
    {path:"registrationVolunteers",component:RegistrationVolunteersComponent},
    {path:"registrationSettlement",component:RegistrationSettlementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogInRoutingModule { }
