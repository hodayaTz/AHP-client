import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenSchedulingListComponent } from './components/open-scheduling-list/open-scheduling-list.component';
import { OpenScedulingBasicComponent } from './modules/open-scheduling/open-sceduling-basic/open-sceduling-basic.component';

const routes: Routes = [
  {path:"" ,component:OpenSchedulingListComponent},
  {path:"openScheduling/:id",component:OpenScedulingBasicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }