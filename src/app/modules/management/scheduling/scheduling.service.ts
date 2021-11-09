import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';
import { ExperienceOptional } from 'src/app/models/experience_optional';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';
import { Professional } from 'src/app/models/professional';
import { PrayerText } from 'src/app/models/prayer_text';
import { OptionalSettlement } from 'src/app/models/optional-settlement';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  url:string="/api/SchedulingHoliday"
  constructor(private _http:HttpClient) { }
  addSchedulingHoliday(newSchedulingHoliday:SchedulingHoliday):Observable<boolean>{
    return this._http.post<boolean>(this.url,newSchedulingHoliday)
  }
  getSchedulingsHoliday( ):Observable<SchedulingHoliday[]>{
    return this._http.get<SchedulingHoliday[]>(this.url)
  }
  getSchedulingHolidayById(id:number):Observable<SchedulingHoliday>{
    return this._http.get<SchedulingHoliday>(this.url+"/"+id)
  }
  deleteSchedulingHoliday(idSchedulingHoliday:number):Observable<boolean>{
    return this._http.delete<boolean>(this.url+"/"+idSchedulingHoliday)
  }
  getExperienceOption():Observable<ExperienceOptional[]>{
    return this._http.get<ExperienceOptional[]>("/api/ExperienceOptional")
  }

  changeExperience(optionalVolunteer:OptionalVolunteer,newExperience:number):Observable<boolean>{
    return this._http.post<boolean>("/api/OptionalVolunteerToHoliday/"+newExperience,optionalVolunteer)
  }

  changeExperienceSettlement(optionalSettlement:OptionalSettlement,newExperience:number):Observable<boolean>{
    return this._http.post<boolean>("/api/OptionalSettlementToHoliday/"+newExperience,optionalSettlement)
  }

  getProfessionalsByHoliday(holiday:number):Observable<Professional[]>{
    return this._http.get<Professional[]>("/api/Professional/GetProfessionalsById/"+holiday)
  }

  getPrayerTexts():Observable<PrayerText[]>{
    return this._http.get<PrayerText[]>("/api/PrayerText/GetPrayerTexts")
  }
  
  // experienceOptionals:ExperienceOptional[]
}