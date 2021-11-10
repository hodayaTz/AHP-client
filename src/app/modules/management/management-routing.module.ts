import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementBasicDesignComponent } from './management-basic-design/management-basic-design.component';
import { MenuDesignComponent } from './menu-design/menu-design.component';
import { NavComponent } from './nav/nav.component';
import { VolunteersListComponent } from './volunteers/volunteers-list/volunteers-list.component';
import { VolunteersDetailsComponent } from './volunteers/volunteers-details/volunteers-details.component';
import { RegistrationVolunteersComponent } from '../login-users/registration-volunteers/registration-volunteers.component';
import { HistoryComponent } from './history/history/history.component';

const routes: Routes = [
  // { path: "", redirectTo: "nn", pathMatch: "full" },
  // { path: "nn", component: ManagementBasicDesignComponent },
  // { path: "menu", component: MenuDesignComponent },
  {
    path: "", component: NavComponent, children: [
      {
        path: "volunteers", loadChildren: () => import("./volunteers/volunteers.module").then(m => m.VolunteersModule)
        // , children: [
        //   { path: "", component: VolunteersListComponent, pathMatch: "full" },
        //   { path: "editVolunteer/:id", component: VolunteersDetailsComponent },
        //   { path: "addVolunteer", component: RegistrationVolunteersComponent }
        // ]
      },
      { path: "settlement", loadChildren: () => import("./settlement/settlement.module").then(m => m.SettlementModule) },
      { path: "scheduling", loadChildren: () => import("./scheduling/scheduling.module").then(m => m.SchedulingModule) },
      { path: "holidays", loadChildren: () => import("./holidays/holidays.module").then(m => m.HolidaysModule) },
      { path: "history", component:HistoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagamentRoutingModule { }