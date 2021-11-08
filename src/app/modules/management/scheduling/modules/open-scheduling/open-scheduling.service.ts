import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';
import { HolidayVolunteer } from 'src/app/models/holiday-volunteer';
import { OptionalSettlement } from 'src/app/models/optional-settlement';
import { SettlementHoliday } from 'src/app/models/settlement-holiday';
import { Professional } from 'src/app/models/professional';

const URL_VOLUNTEER="/api/OptionalVolunteerToHoliday"
const URL_SETTLEMENT="/api/OptionalSettlementToHoliday"
@Injectable({
  providedIn: 'root'
})
export class OpenSchedulingService {
  constructor(private _http:HttpClient) {
    this.getProfessionals().subscribe(data=>{
      this._professionals=data
    })
  }

  getOptionalVolunteerByHoliday(idSchedulingHoliday:number):Observable<OptionalVolunteer[]>{
    return this._http.get<OptionalVolunteer[]>(URL_VOLUNTEER+"/"+idSchedulingHoliday);
  }

  addVolunteerHoliday(volunteerHoliday:HolidayVolunteer):Observable<boolean>{
    return this._http.post<boolean>("/api/HolidayVolunteer",volunteerHoliday)
  }

  deleteVolunteerHoliday(idVolunteer:number,idSchedulingHoliday:number):Observable<boolean>{
    return this._http.delete<boolean>("/api/HolidayVolunteer/"+idVolunteer+"/"+idSchedulingHoliday)
  }

  getOptionalSettlementByHoliday(idSchedulingHoliday:number):Observable<OptionalSettlement[]>{
    return this._http.get<OptionalSettlement[]>(URL_SETTLEMENT+"/"+idSchedulingHoliday);
  }

  addSettlementHoliday(settlementHoliday:SettlementHoliday):Observable<boolean>{
    return this._http.post<boolean>("/api/SettlementHoliday",settlementHoliday)
  }

  // private _holidayId:number
  
  // public get holidayId() : number {
  //   return this._holidayId
  // }
  
  // public set holidayId(h : number) {
  //   this._holidayId = h;
  // }

  public holidayId:number
  
  private _professionals:Professional[]

  public get professionals() : Professional[] {
    return this._professionals
  }
  
  getProfessionals():Observable<Professional[]>{
    return this._http.get<Professional[]>("/api/Professional")
  }

  getProfessionalById(id:number):Professional{
    return this._professionals.filter(p=>p.idProfessional===id)[0]
  }
}