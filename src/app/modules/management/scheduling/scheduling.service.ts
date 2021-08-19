import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';
import { ExperienceOptional } from 'src/app/models/experience_optional';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  url:string="/api/SchedulingHoliday"
  constructor(private _http:HttpClient) { }
  addSchedulingHoliday(newSchedulingHoliday:SchedulingHoliday):Observable<boolean>{
    debugger
    return this._http.post<boolean>(this.url,newSchedulingHoliday)
  }
  getSchedulingsHoliday( ):Observable<SchedulingHoliday[]>{
    return this._http.get<SchedulingHoliday[]>(this.url)
  }
  getSchedulingHolidayById(id:number):Observable<SchedulingHoliday>{
    debugger
    return this._http.get<SchedulingHoliday>(this.url+"/"+id)
  }
  deleteSchedulingHoliday(idSchedulingHoliday:number):Observable<boolean>{
    return this._http.delete<boolean>(this.url+idSchedulingHoliday)
  }
  getExperienceOption():Observable<ExperienceOptional[]>{
    return this._http.get<ExperienceOptional[]>("/api/ExperienceOptional")
  }

  changeExperience(optionalVolunteer:OptionalVolunteer,newExperience:number):Observable<boolean>{
    return this._http.post<boolean>("/api/ExperienceOptional/"+newExperience,optionalVolunteer)
  }
 
  // experienceOptionals:ExperienceOptional[]
}