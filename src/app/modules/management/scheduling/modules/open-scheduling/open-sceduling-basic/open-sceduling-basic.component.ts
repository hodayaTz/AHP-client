import { Component, OnInit, Inject } from '@angular/core';
import { OpenSchedulingService } from '../open-scheduling.service';
import { ActivatedRoute } from '@angular/router';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';
import { SchedulingService } from '../../../scheduling.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../details-volunteer-to-holiday/details-volunteer-to-holiday.component';
import { DialogDataScheduling } from '../../../components/open-scheduling-list/open-scheduling-list.component';

@Component({
  selector: 'app-open-sceduling-basic',
  templateUrl: './open-sceduling-basic.component.html',
  styleUrls: ['./open-sceduling-basic.component.css']
})
export class OpenScedulingBasicComponent implements OnInit {

  constructor(private _service: OpenSchedulingService, private _schedilingService: SchedulingService, private _acr: ActivatedRoute, public dialogRef: MatDialogRef<OpenScedulingBasicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataScheduling) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    // this._acr.paramMap.subscribe(data=>{
    //   if(data.has("id")){
    //     console.log(Number(data.get("id")))
    //     console.log(typeof(Number(data.get("id"))))
    //     this._schedilingService.getSchedulingHolidayById(Number(data.get("id"))).subscribe(res=>{
    //       this.schedulingHoliday=res
    //       // sessionStorage.setItem("holiday",res.idHoliday.toString())
    //       this._service.holidayId=res.idHoliday
    //     })
    //   }
    // })
    this._schedilingService.getSchedulingHolidayById(this.data.id).subscribe(res => {
      this.schedulingHoliday = res
      this._service.holidayId = res.idHoliday
    })
  }

  schedulingHoliday: SchedulingHoliday

  delete() {
    //הוספת חלונית אזהרה על מחיקה
    this._schedilingService.deleteSchedulingHoliday(this.schedulingHoliday.idSchedulingHoliday).subscribe(result => {
      //לתפוס את השגיאה
      console.log(result)
    })
  }

 
}
