import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettlementHoliday } from 'src/app/models/settlement-holiday';


@Injectable({
    providedIn: 'root'
})
export class ActualSchedulingService {    
    constructor(private _http:HttpClient) { }

    getSettlements(id:number):Observable<SettlementHoliday[]>{
        return this._http.get<SettlementHoliday[]>("/api/SettlementHoliday/"+id)
    }
}