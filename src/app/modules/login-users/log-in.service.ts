import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Settlement } from "src/app/models/settlement";
import { Volunteer } from "src/app/models/volunteer";
import { Area } from 'src/app/models/area';

@Injectable()
export class LogInService {

    saveNewVolunteer(newVolunteer:Volunteer): Observable<boolean> {
        console.log(JSON.stringify(newVolunteer))
        return this._http.post<boolean>("/api/Volunteer",newVolunteer)
    }

    saveNewSettlement(newSettlement:Settlement): Observable<boolean> {
        return this._http.post<boolean>("/api/Settlement",newSettlement)
    }
    

    a(): Observable<boolean> {
        return this._http.get<boolean>("/api/Volunteer")
    }

    getArea():Observable<Area[]>{
        return this._http.get<Area[]>("/api/Area");
    }

    addArea(newArea:Area):Observable<boolean>{
        return this._http.post<boolean>("/api/Area",newArea);
    }

    constructor(private _http:HttpClient) {

    }
    
}