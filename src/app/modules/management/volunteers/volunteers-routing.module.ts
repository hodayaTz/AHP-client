import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteersDetailsComponent } from './volunteers-details/volunteers-details.component';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import { RegistrationVolunteersComponent } from '../../login-users/registration-volunteers/registration-volunteers.component';

const routes: Routes = [
  {path:"" ,component:VolunteersListComponent},
  {path:"editVolunteer/:id" ,component:VolunteersDetailsComponent},
  {path:"addVolunteer",component:RegistrationVolunteersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteersRoutingModule { }