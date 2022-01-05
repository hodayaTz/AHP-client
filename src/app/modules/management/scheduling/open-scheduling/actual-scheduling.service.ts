import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettlementHoliday } from 'src/app/models/settlement-holiday';
import { HolidayVolunteer } from 'src/app/models/holiday-volunteer';


@Injectable({
    providedIn: 'root'
})
export class ActualSchedulingService {
    constructor(private _http: HttpClient) { }

    getSettlements(id: number): Observable<SettlementHoliday[]> {
        return this._http.get<SettlementHoliday[]>("/api/SettlementHoliday/" + id)
    }

    getVolunteers(id: number): Observable<HolidayVolunteer[]> {
        return this._http.get<HolidayVolunteer[]>("/api/HolidayVolunteer/" + id)
    }

    // getVolunteersFromHistory(settlement:number,scheduling:number):Observable<HolidayVolunteer[]>{
    //     return this._http.get<HolidayVolunteer[]>("/api/HolidayVolunteer/GetVolunteersBySettlement/"+settlement+"/"+scheduling)
    // }

    getVolunteersToScheduling(settlement:number,scheduling:number):Observable<HolidayVolunteer[][]>{
        return this._http.get<HolidayVolunteer[][]>("/api/HolidayVolunteer/GetVolunteersToScheduling/"+settlement+"/"+scheduling)
    }

    saveVolunteerToSettlement(settlement:number, holidayVolunteer:HolidayVolunteer):Observable<boolean>{
        return this._http.post<boolean>("/api/HolidayVolunteer/saveVolunteerToSettlement/"+settlement,holidayVolunteer)
    }

    deleteVolunteerFromSettlement(holidayVolunteer:HolidayVolunteer):Observable<boolean>{
        return this._http.post<boolean>("/api/HolidayVolunteer/deleteVolunteerFromSettlement",holidayVolunteer)
    }

    sendEmailToSettlements(scheduling:number):Observable<void>{
        return this._http.get<void>("/api/SendingEmail/sendToContactPersonOfSettlements/"+scheduling)
    }

    sendEmailToVolunteers(scheduling:number):Observable<void>{
        return this._http.get<void>("/api/SendingEmail/sendToVolunteers/"+scheduling)
    }

    closeScheduling(schedulingHoliday:number):Observable<boolean>{
        return this._http.put<boolean>("/api/SchedulingHoliday/CloseScheduling/"+schedulingHoliday,{})
    }
}
