import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Holiday } from 'src/app/models/holiday';
import { Professional } from 'src/app/models/professional';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  url:string="/api/Holiday"
  constructor(private _http:HttpClient) { }

  getHolidays():Observable<Holiday[]>{
    return this._http.get<Holiday[]>(this.url)
  }
  getHolidayById(id:number):Observable<Holiday>{
    return this._http.get<Holiday>(this.url+"/"+id)
  }
  deleteHoliday(holidayToDelete:Holiday):Observable<boolean>{
    return this._http.delete<boolean>(this.url+"/"+holidayToDelete.idHoliday)
  }
  getProfessionalsByHoliday(holiday:number):Observable<Professional[]>{
    return this._http.get<Professional[]>("/api/Professional/GetProfessionalsById/"+holiday)
  }
}
