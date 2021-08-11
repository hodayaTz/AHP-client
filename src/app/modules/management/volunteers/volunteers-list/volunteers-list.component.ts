import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Volunteer } from 'src/app/models/volunteer';
import { VolunteersService } from '../volunteers.service';



import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})
export class VolunteersListComponent implements OnInit {

  constructor(private _router: Router, private _service: VolunteersService) {
    
  }

  ngOnInit(): void {
    this.volunteers$=this._service.getVolunteers()
  }

  volunteers$:Observable<Volunteer[]>
  color:string= "primary"
  currentVolunteerDetails:Volunteer
  searchText:string

  editVolunteer(volunteerId: number) {
    debugger
    this._router.navigate(["editVolunteer/", volunteerId])
  }

  changeStatus(volunteerToChange: Volunteer) {
    this._service.changeStatus(volunteerToChange).subscribe(result => {
      console.log(result)
    })
    // this.volunteers$=this._service.getVolunteers()

  }

  addVolunteer() {
    this._router.navigate(["addVolunteer"])
  }

  detailsVolunteer(currentVolunteerDetails:Volunteer){
    this.currentVolunteerDetails=currentVolunteerDetails
  }

}

/** Builds and returns a new User. */


