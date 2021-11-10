import { Component, OnInit } from '@angular/core';
import { ActualSchedulingService } from '../actual-scheduling.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SettlementHoliday } from 'src/app/models/settlement-holiday';
import { Observable } from 'rxjs';
import { HolidayVolunteer } from 'src/app/models/holiday-volunteer';
import { OpenSchedulingService } from '../open-scheduling.service';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';
import { Professional } from 'src/app/models/professional';
import { MatDialog } from '@angular/material/dialog';
import { VolunteerPlacementApprovalComponent } from '../volunteer-placement-approval/volunteer-placement-approval.component';
import { CompletionSchedulingComponent } from '../completion-scheduling/completion-scheduling.component';

export interface DialogDataVolunteer{
  volunteer: HolidayVolunteer,
  settlement: SettlementHoliday,
  isBusy:boolean,
  currentSettlement:number
}
@Component({
  selector: 'app-scheduling-actual',
  templateUrl: './scheduling-actual.component.html',
  styleUrls: ['./scheduling-actual.component.css']
})
export class SchedulingActualComponent implements OnInit {
  constructor(private _service:ActualSchedulingService, private _acr: ActivatedRoute,
    private _openSchedulingService:OpenSchedulingService,public dialog: MatDialog
    ,private _router:Router, private _Activeroute:ActivatedRoute) { }
  ngOnInit(): void {
    this._acr.paramMap.subscribe(data => {
      if(data.has("id")) {
        this.schedulingHolidayId=Number(data.get("id")) 
        // this.volunteers=this._service.getVolunteers(this.schedulingHoliday)
        this.settlements=this._service.getSettlements(this.schedulingHolidayId)
        this._openSchedulingService.getSchedulingHolidayById(this.schedulingHolidayId).subscribe(data=>{
          this.schedulingHoliday=data
        })
      }
    })
  }
  schedulingHolidayId:number
  schedulingHoliday:SchedulingHoliday
  settlements:Observable<SettlementHoliday[]>
  // volunteers:Observable<HolidayVolunteer[]>
  volunteers:HolidayVolunteer[][]
  settlementChoose:SettlementHoliday
  settlementChooseMoreNeeded:SettlementHoliday=new SettlementHoliday()
  selectSettlement(event:any){
    this.settlementChoose=event?._value[0]
    this.settlementChooseMoreNeeded=event?._value[0]
    this._service.getVolunteersToScheduling(this.settlementChoose.idSettlement,this.schedulingHolidayId).subscribe(data=>{
      this.volunteers=data
    })
  }

  getProfessionalById(id:number){
    return this._openSchedulingService.getProfessionalById(id).descriptionProfessional
  }

  isProffesionalRelevant(professional:number){
    if(this.settlementChoose.professionals.find(p=>p==professional)!=undefined){
      return true
    }
    return false
  }

  saveVolunteerToSettlement(volunteer:HolidayVolunteer,_isBusy:boolean=false){
    const dialogRef = this.dialog.open(VolunteerPlacementApprovalComponent, {
      width: '300px',
      data: {volunteer: volunteer, settlement: this.settlementChoose,isBusy:_isBusy,currentSettlement:volunteer.idSettlement},
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  finishScheduling(){
    this._router.navigate(["../history",this.schedulingHolidayId],{relativeTo:this._Activeroute})
    const dialogRef = this.dialog.open(CompletionSchedulingComponent, {
      data: {scheduling:this.schedulingHolidayId},
      panelClass:'dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }
}