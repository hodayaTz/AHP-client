import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Volunteer } from 'src/app/models/volunteer';
import { LogInService } from '../log-in.service';
import { Area } from 'src/app/models/area';

@Component({
  selector: 'app-registration-volunteers',
  templateUrl: './registration-volunteers.component.html',
  styleUrls: ['./registration-volunteers.component.css']
})
export class RegistrationVolunteersComponent implements OnInit {
  constructor(private _service:LogInService) { 
    _service.a().subscribe(data=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
    this._service.getArea().subscribe(areasData=>{
      this.areas=areasData
      this.areas.forEach(element => {
        console.log(element.areaName)
      });
    })
  }
  areas:Area[]
  newVolunteer:Volunteer;
  volunteerExist:boolean=true;
  volunteerForm:FormGroup=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    identityNumber:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    gmail:new FormControl("",[Validators.required]),
    idArea:new FormControl("",[Validators.required]),
  })

  saveNewVolunteer(){
    this.newVolunteer=this.volunteerForm.value;
    this.newVolunteer.isActive=true;
    this.newVolunteer.idVolunteer=0
    debugger
    this._service.saveNewVolunteer(this.newVolunteer).subscribe(res=>{
      this.volunteerExist = res;
    })
  } 
}
