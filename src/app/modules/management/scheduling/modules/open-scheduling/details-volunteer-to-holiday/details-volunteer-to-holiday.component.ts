import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { OpenSchedulingService } from '../open-scheduling.service';
import { HolidayVolunteer } from 'src/app/models/holiday-volunteer';
import { Professional } from 'src/app/models/professional';
import { Observable } from 'rxjs';
import { SchedulingService } from '../../../scheduling.service';

@Component({
  selector: 'app-details-volunteer-to-holiday',
  templateUrl: './details-volunteer-to-holiday.component.html',
  styleUrls: ['./details-volunteer-to-holiday.component.css']
})
export class DetailsVolunteerToHolidayComponent implements OnInit {

  volunteerHolidayForm:FormGroup=new FormGroup({
    // לטפל במערך של מקצועות ושל נוסחים
    //לעשות ngif
    countjoiners:new FormControl(0),
    withFamily :new FormControl(false),
    countKids :new FormControl(0),
    // idPrayer :new FormControl(""),
    hasCar:new FormControl(false),
    hasLicense :new FormControl(false),
    professionals: new FormControl([])
  })


  ngOnInit(): void {
    let holiday=Number(sessionStorage.getItem("holiday")) 
    // this.professionals$=this._SchedulingService.getProfessionalsByHoliday(holiday)
    this._SchedulingService.getProfessionalsByHoliday(holiday).subscribe(data=>{
      console.log(data)
      this.professionals$=data
      for (let index = 0; index < this.professionals$.length; index++) {
        this.index[index]=index
      }
    })
  }

  constructor(private _openSchedulingService:OpenSchedulingService,
    private _SchedulingService : SchedulingService,
    public dialogRef: MatDialogRef<DetailsVolunteerToHolidayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  volunteer:HolidayVolunteer
  professionals$:Professional[]
  index:number[]=[]

  addVolunteerHoliday(){
    this.volunteer=this.volunteerHolidayForm.value
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
