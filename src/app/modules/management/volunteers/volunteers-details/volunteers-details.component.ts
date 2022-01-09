import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolunteersService } from '../volunteers.service';
import { Volunteer } from 'src/app/models/volunteer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Area } from 'src/app/models/area';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-volunteers-details',
  templateUrl: './volunteers-details.component.html',
  styleUrls: ['./volunteers-details.component.css']
})
export class VolunteersDetailsComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar,private dialog: MatDialog, private _acr: ActivatedRoute, private _serviceVolunteers: VolunteersService) { }
  
  ngOnInit(): void {
    this._acr.paramMap.subscribe(data => {
      if (data.has("id")) {
        this._serviceVolunteers.getVolunteerById(Number(data.get("id"))).subscribe(current_volunteer => {
          this.volunteer = current_volunteer
        })
      }
    })
    this._serviceVolunteers.getArea().subscribe(areasData => {
      this.areas = areasData
    })
  }
  private _volunteer: Volunteer = new Volunteer()
  volunteerForm: FormGroup | undefined = undefined
  areas: Area[]
  saveSucceed = false
  public get volunteer(): Volunteer {
    return this._volunteer
  }
  public set volunteer(v: Volunteer) {
    this._volunteer = v
    if (this._volunteer != undefined) {
      this.volunteerForm = new FormGroup({
        firstName: new FormControl(this.volunteer.firstName, [Validators.required]),
        lastName: new FormControl(this.volunteer.lastName, [Validators.required]),
        identityNumber: new FormControl(this.volunteer.identityNumber, [Validators.required]),
        phone: new FormControl(this.volunteer.phone, [Validators.required]),
        gmail: new FormControl(this.volunteer.gmail, [Validators.required]),
        idArea: new FormControl(this.volunteer.idArea, [Validators.required]),
        idVolunteer: new FormControl(this.volunteer.idVolunteer),
        isActive: new FormControl(this.volunteer.isActive),
      })
    }
  }

  updateVolunteer() {
    this.volunteer = this.volunteerForm?.value
    this._serviceVolunteers.updateVolunteer(this.volunteer).subscribe(result => {
      this.saveSucceed = result
      if(result){
        this.openSnackBar("פרטי הפעיל עודכנו בהצלחה")
      }
      else{
        this.openSnackBar("שגיאה- פרטי הפעיל לא עודכנו נסה שוב")
      }
    })
  }

  openSnackBar(message: string, action: string="x") {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }
}
