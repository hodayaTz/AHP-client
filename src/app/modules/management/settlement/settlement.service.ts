import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Settlement } from 'src/app/models/settlement';

@Injectable()
export class SettlementService {
  url:string="/api/Settlement"
  constructor(private _http:HttpClient) { }
  getSettlements():Observable<Settlement[]>{
    return this._http.get<Settlement[]>(this.url);
  }
}
