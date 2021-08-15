import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';

const URL="/api/OptionalVolunteerToHoliday"
@Injectable({
  providedIn: 'root'
})
export class OpenSchedulingService {
  constructor(private _http:HttpClient) { }

  getOptionalVolunteerByHoliday(idSchedulingHoliday:number):Observable<OptionalVolunteer[]>{
    return this._http.get<OptionalVolunteer[]>(URL+"/"+idSchedulingHoliday);
  }
}