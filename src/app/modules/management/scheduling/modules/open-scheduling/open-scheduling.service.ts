import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';
import { HolidayVolunteer } from 'src/app/models/holiday-volunteer';
import { OptionalSettlement } from 'src/app/models/optional-settlement';
import { SettlementHoliday } from 'src/app/models/settlement-holiday';

const URL_VOLUNTEER="/api/OptionalVolunteerToHoliday"
const URL_SETTLEMENT="/api/OptionalSettlementToHoliday"
@Injectable({
  providedIn: 'root'
})
export class OpenSchedulingService {
  constructor(private _http:HttpClient) { }

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
}