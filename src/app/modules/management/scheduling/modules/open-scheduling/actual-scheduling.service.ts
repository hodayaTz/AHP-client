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

    getVolunteersFromHistory(settlement:number):Observable<Record<number,number>>{
        return this._http.get<Record<number,number>>("/api/HolidayVolunteer/GetVolunteersBySettlement/"+settlement)
    }
    // getVolunteersFromHistory(settlement: number) {
    //     return this._http.get<Map<number, number>>("/api/HolidayVolunteer/GetVolunteersBySettlement/" + settlement, {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'text/plain',
    //             'Accept': 'application/json'
    //         }),
    //         withCredentials: true
    //     });
    // }

}