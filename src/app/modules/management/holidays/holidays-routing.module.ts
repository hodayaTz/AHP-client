import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';
import { HistoryComponent } from '../history/history/history.component';

const routes: Routes = [
  {path:"" ,component:HolidaysListComponent, pathMatch:"full"},
  {path:"detailsHoliday/:id" ,component:HolidayDetailsComponent},
  {path:"history/:holiday",component:HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidaysRoutingModule { }
