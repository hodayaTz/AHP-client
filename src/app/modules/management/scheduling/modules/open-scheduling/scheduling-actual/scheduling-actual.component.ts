import { Component, OnInit } from '@angular/core';
import { ActualSchedulingService } from '../actual-scheduling.service';
import { ActivatedRoute } from '@angular/router';
import { SettlementHoliday } from 'src/app/models/settlement-holiday';
import { Observable } from 'rxjs';
import { HolidayVolunteer } from 'src/app/models/holiday-volunteer';
import { OpenSchedulingService } from '../open-scheduling.service';

@Component({
  selector: 'app-scheduling-actual',
  templateUrl: './scheduling-actual.component.html',
  styleUrls: ['./scheduling-actual.component.css']
})
export class SchedulingActualComponent implements OnInit {
  constructor(private _service:ActualSchedulingService, private _acr: ActivatedRoute,private _openSchedulingService:OpenSchedulingService) { }
  ngOnInit(): void {
    this._acr.paramMap.subscribe(data => {
      if(data.has("id")) {
        this.schedulingHoliday=Number(data.get("id")) 
        this.volunteers=this._service.getVolunteers(this.schedulingHoliday)
        this.settlements=this._service.getSettlements(this.schedulingHoliday)
        
      }
    })
  }
  schedulingHoliday:number
  settlements:Observable<SettlementHoliday[]>
  volunteers:Observable<HolidayVolunteer[]>
  // volunteersFromHistory:Observable<HolidayVolunteer[]>
  settlementChoose:SettlementHoliday=new SettlementHoliday()
  settlementChooseMoreNeeded:SettlementHoliday=new SettlementHoliday()
  selectSettlement(event:any){
    this.settlementChoose=event?._value[0]
    this.settlementChooseMoreNeeded=event?._value[0]
    // this._service.getVolunteersFromHistory(this.settlementChoose.idSettlement,this.schedulingHoliday).subscribe(data=>{
    // })
    // this.volunteersFromHistory=this._service.getVolunteersFromHistory(this.settlementChoose.idSettlement,this.schedulingHoliday)
    this._service.getVolunteersToScheduling(this.settlementChoose.idSettlement,this.schedulingHoliday).subscribe(data=>{
      debugger
    })
  }

  getProfessionalById(id:number){
    return this._openSchedulingService.getProfessionalById(id).descriptionProfessional
  }
}