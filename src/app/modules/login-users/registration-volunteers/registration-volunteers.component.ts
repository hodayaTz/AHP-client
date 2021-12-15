import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Volunteer } from 'src/app/models/volunteer';
import { LogInService } from '../log-in.service';
import { Area } from 'src/app/models/area';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-registration-volunteers',
  templateUrl: './registration-volunteers.component.html',
  styleUrls: ['./registration-volunteers.component.css']
})
export class RegistrationVolunteersComponent implements OnInit {
  constructor(private _service:LogInService,private _snackBar: MatSnackBar) { 
    
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
  newVolunteer:Volunteer
  
  volunteerForm:FormGroup=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    identityNumber:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    gmail:new FormControl("",[Validators.email]),
    idArea:new FormControl("",[Validators.required]),
  })

  openSnackBar(message: string, action: string="x") {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }
  
  saveNewVolunteer(){
    this.newVolunteer=this.volunteerForm.value;
    this.newVolunteer.isActive=true;
    this.newVolunteer.idVolunteer=0
    debugger
    this._service.saveNewVolunteer(this.newVolunteer).subscribe(res=>{
      if(res){
        this.openSnackBar("פרטי הפעיל נשמרו בצלחה")
      }
      else{
        this.openSnackBar("הפעיל קיים במערכת")
      }
      this.volunteerForm.reset()
      this.volunteerForm.enable()
    },err=>{
      this.openSnackBar("שגיאה - אנא נסה שנית")
    })
  } 
  element:number=155324.2547
}
