import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManagementLogInService{

  constructor(private _http:HttpClient) { }
  
  checkPassword(pass:string):Observable<boolean>{
    return this._http.get<boolean>("/api/Password/checkPassword/"+pass)
  }
}
