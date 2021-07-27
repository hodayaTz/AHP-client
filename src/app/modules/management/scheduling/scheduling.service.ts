import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';

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
}