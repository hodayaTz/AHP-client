import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Volunteer } from 'src/app/models/volunteer';
import { VolunteersService } from '../volunteers.service';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})
export class VolunteersListComponent implements OnInit {


  constructor(private _router:Router,private _service:VolunteersService) { }

  ngOnInit(): void {
    this._service.getVolunteers().subscribe(data=>{
      this.volunteers=data
    })
  }
  volunteers:Volunteer[]

  detailsVolunteer(volunteerId:number){
    debugger
    this._router.navigate(["detailsVolunteer/",volunteerId])
  }

  changeStatus(volunteerToChange:Volunteer){
    this._service.changeStatus(volunteerToChange).subscribe(result=>{
      console.log(result)
    })
    this._service.getVolunteers().subscribe(data=>{
      this.volunteers=data
    })
  }

  addVolunteer(){
    this._router.navigate(["addVolunteer"])
  }

}
