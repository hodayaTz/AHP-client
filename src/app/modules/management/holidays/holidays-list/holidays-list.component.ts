import { Component, OnInit } from '@angular/core';
import { Holiday } from 'src/app/models/holiday';
import {  HolidaysService } from '../holidays-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.css']
})
export class HolidaysListComponent implements OnInit {

  detailsHoliday(holidayId:number){
    console.log(holidayId)
    console.log()
    this._router.navigate(["/detailsHoliday",holidayId])
  }

  constructor(private _serviceHoliday:HolidaysService,private _router:Router) { }

  ngOnInit(): void {
    this.holidays$=this._serviceHoliday.getHolidays()
  }
  holidays$:Observable< Holiday[]>

  deleteHoliday(holidayToDelete:Holiday){
    this._serviceHoliday.deleteHoliday(holidayToDelete).subscribe(res=>{
      
    })
  }

}
