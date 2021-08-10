import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementBasicDesignComponent } from './management-basic-design/management-basic-design.component';
import { MenuDesignComponent } from './menu-design/menu-design.component';

const routes: Routes = [
  { path: "", redirectTo: "nn", pathMatch: "full" },
  { path: "nn", component: ManagementBasicDesignComponent },
  { path: "menu", component: MenuDesignComponent },
  { path: "volunteers", loadChildren: () => import("./volunteers/volunteers.module").then(m => m.VolunteersModule) },
  { path: "holidays", loadChildren: () => import("./holidays/holidays.module").then(m => m.HolidaysModule) },
  { path: "settlement", loadChildren: () => import("./settlement/settlement.module").then(m => m.SettlementModule) },
  { path: "scheduling", loadChildren: () => import("./scheduling/scheduling.module").then(m => m.SchedulingModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagamentRoutingModule { }