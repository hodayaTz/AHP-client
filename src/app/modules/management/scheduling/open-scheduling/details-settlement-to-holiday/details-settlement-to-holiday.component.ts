import { Component, OnInit, Inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PrayerText } from 'src/app/models/prayer_text';
import { Professional } from 'src/app/models/professional';
import { SettlementHoliday } from 'src/app/models/settlement-holiday';
import { OpenSchedulingService } from '../open-scheduling.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailsVolunteerToHolidayComponent } from '../details-volunteer-to-holiday/details-volunteer-to-holiday.component';
import { OptionalSettlement } from 'src/app/models/optional-settlement';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SchedulingService } from '../../scheduling.service';

export interface DialogData {
  settlement: number;
  scheduling: number;
  idExperience:number;
  optionalSettlement:OptionalSettlement;
}
@Component({
  selector: 'app-details-settlement-to-holiday',
  templateUrl: './details-settlement-to-holiday.component.html',
  styleUrls: ['./details-settlement-to-holiday.component.css']
})
export class DetailsSettlementToHolidayComponent implements OnInit {

  ngOnInit(): void {
    // this.subscription = this._openSchedulingService.currentholidayId.subscribe(id=>
    //   {console.log(id)
    //   this.professionals$=this._SchedulingService.getProfessionalsByHoliday(id)}
    // )
    // let holiday=this._openSchedulingService.holidayId
    let holiday=Number( sessionStorage.getItem('holidy'))
    this.professionals$=this._SchedulingService.getProfessionalsByHoliday(holiday)
    this.prayerTexts$=this._SchedulingService.getPrayerTexts()
  }

  constructor(private _snackBar: MatSnackBar,private _openSchedulingService:OpenSchedulingService,private fb:FormBuilder,
    private _SchedulingService : SchedulingService,
    public dialogRef: MatDialogRef<DetailsVolunteerToHolidayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  settlement:SettlementHoliday
  professionals$:Observable<Professional[]>
  prayerTexts$:Observable<PrayerText[]>
  // holiday:number;
  // subscription: Subscription;
  
  settlementHolidayForm:FormGroup=new FormGroup({
    amountPeopleConsumed:new FormControl(0),
    idPrayer :new FormControl(Validators.required),
    isSynagogue:new FormControl(false),
    isSeferTora:new FormControl(false),
    additionalNeeds :new FormControl(""),
    professionals: new FormControl([]),
  })

  addSettlementHoliday(){
    this.settlement=this.settlementHolidayForm.value
    this.settlement.idSchedulingHoliday=this.data.scheduling
    this.settlement.idSettlement=this.data.settlement
    this._openSchedulingService.addSettlementHoliday(this.settlement).subscribe(result=>{
      debugger
      if(result){
        this._SchedulingService.changeExperienceSettlement(this.data.optionalSettlement,this.data.idExperience).subscribe(_result=>{
          if(_result){
            this.openSnackBar("נשמרו פרטי הישוב "+this.data.optionalSettlement.settlement.nameSettlement)
          }
          else{
            this.openSnackBar("שגיאה-פרטי הישוב לא נשמרו")
          }
        })
      }
      else{
        this.openSnackBar("שגיאה-פרטי הישוב לא נשמרו")      }
    })
  }
  openSnackBar(message: string, action: string="x") {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }
}
