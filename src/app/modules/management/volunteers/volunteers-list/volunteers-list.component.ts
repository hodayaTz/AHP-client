import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Volunteer } from 'src/app/models/volunteer';
import { VolunteersService } from '../volunteers.service';



import { Observable } from 'rxjs';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})
export class VolunteersListComponent implements OnInit {

  constructor(private _router: Router, private _service: VolunteersService) {}
  

  ngOnInit(): void {
    this.volunteers$=this._service.getVolunteers()
  }

  displayedColumns: string[] = ['nameAndPhone', 'details','history','delete']
  volunteers$:Observable<Volunteer[]>
  color:string= "primary"
  currentVolunteerDetails:Volunteer
  searchText:string
  getVolHistory(){}
  editVolunteer(id: number) {
    debugger
    this._router.navigate(["editVolunteer/", id])
  }

  // changeStatus(volunteerToChange: Volunteer) {
  //   this._service.changeStatus(volunteerToChange).subscribe(result => {
  //     console.log(result)
  //   })
  //   // this.volunteers$=this._service.getVolunteers()
  // }

  deleteVolunteer(volunteer:Volunteer){
    debugger
    this._service.changeStatus(volunteer).subscribe(result => {
      console.log(result)
    })
    this.volunteers$=this._service.getVolunteers()
  }

  addVolunteer() {
    this._router.navigate(["addVolunteer"])
  }

  detailsVolunteer(currentVolunteerDetails:Volunteer){
    this.currentVolunteerDetails=currentVolunteerDetails
  }

}

/** Builds and returns a new User. */


