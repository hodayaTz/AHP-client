import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:"volunteers",loadChildren: () => import("./volunteers/volunteers.module").then(m => m.VolunteersModule)},
    {path:"holidays",loadChildren: () => import("./holidays/holidays.module").then(m => m.HolidaysModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagamentRoutingModule { }