import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoryScheduling } from 'src/app/models/history';

@Injectable()
export class HistoryService {
  url: string = "/api/History"

  constructor(private _http: HttpClient) { }

  getHistory():Observable<HistoryScheduling[]>{
    return this._http.get<HistoryScheduling[]>(this.url)
  }
}