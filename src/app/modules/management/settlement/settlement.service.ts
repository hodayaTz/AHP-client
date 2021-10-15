import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from 'src/app/models/area';
import { Settlement } from 'src/app/models/settlement';

@Injectable()
export class SettlementService {
  url: string = "/api/Settlement"

  constructor(private _http: HttpClient) { }

  getSettlements(): Observable<Settlement[]> {
    return this._http.get<Settlement[]>(this.url);
  }

  deleteService(idSettlement: number): Observable<boolean> {
    return this._http.delete<boolean>(this.url + "/" + idSettlement);
  }

  getSettlementById(idSettlement: number): Observable<Settlement> {
    return this._http.get<Settlement>(this.url + "/" + idSettlement);
  }

  getArea(): Observable<Area[]> {
    return this._http.get<Area[]>("/api/Area");
  }

  addSettlement(settlement: Settlement): Observable<boolean> {
    return this._http.post<boolean>(this.url, settlement);
  }

  updateSettlement(settlement: Settlement): Observable<boolean> {
    debugger
    return this._http.put<boolean>(this.url + "/", settlement)
  }
}
