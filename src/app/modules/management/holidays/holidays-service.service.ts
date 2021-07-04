import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Holiday } from 'src/app/models/holiday';

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
}
