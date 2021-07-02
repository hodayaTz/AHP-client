import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';

const routes: Routes = [
  {path:"detailsHoliday/:id" ,component:HolidayDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidaysRoutingModule { }
