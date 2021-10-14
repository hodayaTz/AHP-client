import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OptionalSettlementsComponent } from './optional-settlements/optional-settlements.component';

const ROUTES: Routes = [
  {path:"" ,component:OptionalSettlementsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ActualSchedulingRoutingModule { }