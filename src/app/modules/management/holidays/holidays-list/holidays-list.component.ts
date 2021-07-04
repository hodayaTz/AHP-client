import { Component, OnInit } from '@angular/core';
import { Holiday } from 'src/app/models/holiday';
import {  HolidaysService } from '../holidays-service.service';
import { Router } from '@angular/router';

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

  holidays:Holiday[]
  ngOnInit(): void {
    this._serviceHoliday.getHolidays().subscribe(data=>{
      this.holidays=data
    })
  }

  deleteHoliday(holidayToDelete:Holiday){
    this._serviceHoliday.deleteHoliday(holidayToDelete).subscribe(res=>{
      if (res){
        alert("the deletion succeeded!!");
        let index = this.holidays.indexOf(holidayToDelete);
        this.holidays.splice(index,1);
      }
      else{
        alert("the deletion did not succeed");
      }
    })
  }

}
