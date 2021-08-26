import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';
import { HolidayVolunteer } from 'src/app/models/holiday-volunteer';

const URL_VOLUNTEER="/api/OptionalVolunteerToHoliday"
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
}