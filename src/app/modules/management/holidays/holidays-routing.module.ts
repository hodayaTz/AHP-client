import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';

const routes: Routes = [
  {path:"" ,component:HolidaysListComponent},
  {path:"detailsHoliday/:id" ,component:HolidayDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidaysRoutingModule { }
