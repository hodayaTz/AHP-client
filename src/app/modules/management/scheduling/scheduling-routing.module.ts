import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenSchedulingListComponent } from './components/open-scheduling-list/open-scheduling-list.component';

const routes: Routes = [
  {path:"" ,component:OpenSchedulingListComponent,pathMatch:"full"
  // ,children:[{path:"openScheduling/:id",component:OpenScedulingBasicComponent}]
  },
  // {path:"openScheduling/:id",component:OpenScedulingBasicComponent}
  {path:"openScheduling/:id",loadChildren: () => import("./open-scheduling/open-scheduling.module").then(m => m.OpenSchedulingModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }