import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenSchedulingListComponent } from './open-scheduling-list/open-scheduling-list.component';

const routes: Routes = [
  {path:"" ,component:OpenSchedulingListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }