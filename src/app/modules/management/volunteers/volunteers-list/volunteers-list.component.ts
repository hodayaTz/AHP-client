import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Volunteer } from 'src/app/models/volunteer';
import { VolunteersService } from '../volunteers.service';



import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})
export class VolunteersListComponent implements OnInit {

  constructor(private _router: Router, private _service: VolunteersService) {
    
  }

  ngOnInit(): void {
    this._service.getVolunteers().subscribe(data => {
      this.volunteers = data
    })
  }
  volunteers: Volunteer[]
  color:string= "primary"
  currentVolunteerDetails:Volunteer

  editVolunteer(volunteerId: number) {
    debugger
    this._router.navigate(["editVolunteer/", volunteerId])
  }

  changeStatus(volunteerToChange: Volunteer) {
    this._service.changeStatus(volunteerToChange).subscribe(result => {
      console.log(result)
    })
    this._service.getVolunteers().subscribe(data => {
      this.volunteers = data
    })
  }

  addVolunteer() {
    this._router.navigate(["addVolunteer"])
  }

  detailsVolunteer(currentVolunteerDetails:Volunteer){
    this.currentVolunteerDetails=currentVolunteerDetails
  }
  
  
  applyFilter(event: Event) {
    // this.volunteers.forEach(element => {
    //   this.dataSource.data.push(element)
    // });
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

}

/** Builds and returns a new User. */


