import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenSchedulingService } from '../open-scheduling.service';
import { ActivatedRoute } from '@angular/router';
import { SchedulingService } from '../../../scheduling.service';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';
import { Observable } from 'rxjs';
import { ExperienceOptional } from 'src/app/models/experience_optional';
import { MatTableDataSource } from '@angular/material/table';
import { DetailsVolunteerToHolidayComponent } from '../details-volunteer-to-holiday/details-volunteer-to-holiday.component';
import { OptionalSettlement } from 'src/app/models/optional-settlement';
import { DetailsSettlementToHolidayComponent } from '../details-settlement-to-holiday/details-settlement-to-holiday.component';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  primary:string="primary"
  constructor(private dialog: MatDialog,private _service:OpenSchedulingService,private _acr: ActivatedRoute,private _serviceScheduling:SchedulingService) { }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(data=>{
      if(data.has("id")){
        this.schedulingHolidayId=Number(data.get("id"))
        this.getOptinalSettlements()
      }
    })
    this.experienceOptionals$=this._serviceScheduling.getExperienceOption().pipe()
  }

  schedulingHolidayId:number
  settlements:OptionalSettlement[]
  dataSource:any
  displayedColumns: string[] = ['experience','nameAndLocation','contactPer', 'details','btn']
  experienceOptionals$:Observable<ExperienceOptional[]>
  currentStatus:number=-1

  getOptinalSettlements(){
    this._service.getOptionalSettlementByHoliday(this.schedulingHolidayId).subscribe(data=>{
      this.settlements=data
      this.dataSource = new MatTableDataSource(this.settlements.filter(v=>v.idExperience==0||v.idExperience==1))
      this.dataSource.filterPredicate = (data: OptionalSettlement, filter:string) => {
        console.log(data.settlement.nameSettlement)
        return data.settlement.nameSettlement.includes(filter)  
      }
      // this.showOnly(this.currentStatus)
    })
  }

  applyFilter(event: Event ) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  changeExperience(optionalSettlement:OptionalSettlement,newExperience:ExperienceOptional){
    //האם להשתמש בID או בתאור
    if(newExperience.descriptionExperience=='כן'){
      this.openDialog(optionalSettlement.idSettlement,newExperience.idExperience,optionalSettlement)
    }
    else{
      if(optionalSettlement.idExperience==1){
        //למחוק מהטבלה של holidayvolunteer
        //לעשות אתזה 
        // this._service.deleteVolunteerHoliday(optionalVolunteer.idSchedulingHoliday,optionalVolunteer.idVolunteer)
      }
      this._serviceScheduling.changeExperienceSettlement(optionalSettlement,newExperience.idExperience).subscribe(result=>{
        console.log(result)
      })
    }
    this.getOptinalSettlements()
  }

  openDialog(idSettlement:number,experience:number,_OptionalSettlement:OptionalSettlement): void {
    const dialogRef = this.dialog.open(DetailsSettlementToHolidayComponent, {
      width: 'auto',
      data: {settlement: idSettlement, scheduling: this.schedulingHolidayId,idExperience:experience,optionalSettlement:_OptionalSettlement}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  showOnly(idExperience:number){
    if(idExperience==-1 ){
      this.dataSource=new MatTableDataSource(this.settlements)
      return
    }
    this.dataSource=new MatTableDataSource(this.settlements.filter(s=>s.idExperience==idExperience))
    this.currentStatus=idExperience
  }
}
