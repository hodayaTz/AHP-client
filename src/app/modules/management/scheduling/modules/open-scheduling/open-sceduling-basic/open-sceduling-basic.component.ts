import { Component, OnInit } from '@angular/core';
import { OpenSchedulingService } from '../open-scheduling.service';
import { ActivatedRoute } from '@angular/router';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';
import { SchedulingService } from '../../../scheduling.service';

@Component({
  selector: 'app-open-sceduling-basic',
  templateUrl: './open-sceduling-basic.component.html',
  styleUrls: ['./open-sceduling-basic.component.css']
})
export class OpenScedulingBasicComponent implements OnInit {

  constructor(private _service:OpenSchedulingService,private _schedilingService:SchedulingService,private _acr: ActivatedRoute) { }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(data=>{
      if(data.has("id")){
        debugger
        console.log(Number(data.get("id")))
        console.log(typeof(Number(data.get("id"))))
        this._schedilingService.getSchedulingHolidayById(Number(data.get("id"))).subscribe(res=>{
          debugger
          this.schedulingHoliday=res
        })
      }
    })
  }

  schedulingHoliday:SchedulingHoliday

  delete(){
    //הוספת חלונית אזהרה על מחיקה
    this._schedilingService.deleteSchedulingHoliday(this.schedulingHoliday.idSchedulingHoliday).subscribe(result=>{
      //לתפוס את השגיאה
      console.log(result)
    })
  }
}
