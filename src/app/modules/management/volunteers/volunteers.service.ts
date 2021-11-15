import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Volunteer } from 'src/app/models/volunteer';
import { Observable } from 'rxjs';
import { Area } from 'src/app/models/area';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {
  url: string = "/api/Volunteer"
  constructor(private _http: HttpClient) { }

  getVolunteers(): Observable<Volunteer[]> {
    return this._http.get<Volunteer[]>(this.url)
  }
  getVolunteerById(id: number): Observable<Volunteer> {
    return this._http.get<Volunteer>(this.url + "/" + id)
  }

  getArea(): Observable<Area[]> {
    return this._http.get<Area[]>("/api/Area")
  }
  updateVolunteer(volunteerToUpdate: Volunteer): Observable<boolean> {
    return this._http.put<boolean>(this.url + "/", volunteerToUpdate)
  }
  changeStatus(volunteerToChange: Volunteer): Observable<boolean> {
    return this._http.put<boolean>(this.url + "/ChangeStatus", volunteerToChange)
  }

  isPlaced(volunteer:number):Observable<boolean>{
    return this._http.get<boolean>(this.url+"/IsPlaced/"+volunteer)
  }

}
