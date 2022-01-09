import { Component, OnInit, Inject } from '@angular/core';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Holiday } from 'src/app/models/holiday';
import { SchedulingService } from '../../scheduling.service';
import { HolidaysService } from '../../../holidays/holidays-service.service';


@Component({
  selector: 'app-new-scheduling-holiday',
  templateUrl: './new-scheduling-holiday.component.html',
  styleUrls: ['./new-scheduling-holiday.component.css']
})
export class NewSchedulingHolidayComponent implements OnInit {

  constructor(private _service:SchedulingService,private _holidaysService:HolidaysService,
    public dialogRef: MatDialogRef<NewSchedulingHolidayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
    this.formNewSchedulingHoliday=new FormGroup({
      idSchedulingHoliday:new FormControl(0),
      idHoliday:new FormControl(),
      yearHoliday:new FormControl(new Date().getFullYear(),[Validators.min(new Date().getFullYear())]),
    })
    this._holidaysService.getHolidays().subscribe(holidaysData=>{
      this.holidays=holidaysData
    })
  }

  currentYear:number=new Date().getFullYear()
  formNewSchedulingHoliday:FormGroup
  holidays:Holiday[]
  newSchedulingHoliday:SchedulingHoliday

  addSchedulingHoliday(){
    this.newSchedulingHoliday=new SchedulingHoliday
    this.newSchedulingHoliday=this.formNewSchedulingHoliday.value
    this.newSchedulingHoliday.isOpen=true
    this.newSchedulingHoliday.isValid=true
    this._service.addSchedulingHoliday(this.newSchedulingHoliday).subscribe(result=>{
      if(!result){
      }
    })
  }

}
