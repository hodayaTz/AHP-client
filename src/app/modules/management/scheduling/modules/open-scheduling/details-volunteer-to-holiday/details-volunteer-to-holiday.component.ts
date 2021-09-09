import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { OpenSchedulingService } from '../open-scheduling.service';
import { HolidayVolunteer } from 'src/app/models/holiday-volunteer';
import { Professional } from 'src/app/models/professional';
import { Observable } from 'rxjs';
import { SchedulingService } from '../../../scheduling.service';
import { PrayerText } from 'src/app/models/prayer_text';

export interface DialogData {
  volunteer: number;
  scheduling: number;
}

@Component({
  selector: 'app-details-volunteer-to-holiday',
  templateUrl: './details-volunteer-to-holiday.component.html',
  styleUrls: ['./details-volunteer-to-holiday.component.css']
})
export class DetailsVolunteerToHolidayComponent implements OnInit {
  
  ngOnInit(): void {
    let holiday=Number(sessionStorage.getItem("holiday")) 
    this.professionals$=this._SchedulingService.getProfessionalsByHoliday(holiday)
    this.prayerTexts$=this._SchedulingService.getPrayerTexts()
  }

  constructor(private _openSchedulingService:OpenSchedulingService,private fb:FormBuilder,
    private _SchedulingService : SchedulingService,
    public dialogRef: MatDialogRef<DetailsVolunteerToHolidayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }


  volunteer:HolidayVolunteer
  professionals$:Observable<Professional[]>
  prayerTexts$:Observable<PrayerText[]>

  volunteerHolidayForm:FormGroup=new FormGroup({
    countjoiners:new FormControl(0),
    withFamily :new FormControl(false),
    countKids :new FormControl(0),
    idPrayer :new FormControl(Validators.required),
    hasCar:new FormControl(false),
    hasLicense :new FormControl(false),
    professionals: new FormControl([]),
  })

  addVolunteerHoliday(){
    this.volunteer=this.volunteerHolidayForm.value
    console.log(this.volunteer)
    this.volunteer.idSchedulingHoliday=this.data.scheduling
    this.volunteer.idVolunteer=this.data.volunteer
    debugger
    this._openSchedulingService.addVolunteerHoliday(this.volunteer).subscribe(result=>{
      if(result){
        console.log('הפעיל נוסף בהצלחה')
      }
      else{
        console.log("הפעיל כבר קיים בשיבוץ זה")
      }
    })
  }
}
