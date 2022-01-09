import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holiday } from 'src/app/models/holiday';
import { HolidaysService } from '../holidays-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Professional } from 'src/app/models/professional';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.professionals$=this._serviceHoliday.getAllProfessionals()
  }

  constructor(
    public dialogRef: MatDialogRef<HolidayDetailsComponent>
,private _serviceHoliday: HolidaysService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addHoliday(){
    let holiday=new Holiday()
    holiday.idHoliday=0
    holiday.descriptionHoliday=this.holidayForm.value.descriptionHoliday
    holiday.professionals=this.holidayForm.value.professionals
    this._serviceHoliday.addHoliday(holiday).subscribe(res=>{
      this.onNoClick()
    })
  }
  holidayForm:FormGroup=new FormGroup({
    professionals:new FormControl([]),
    descriptionHoliday:new FormControl(""),
    idHoliday:new FormControl(0)
  })
  professionals$:Observable<Professional[]>

}
