import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Settlement } from 'src/app/models/settlement';
import { LogInService } from '../log-in.service';
import { Area } from 'src/app/models/area';
import { ContactPerson } from 'src/app/models/contactPerson';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-settlement',
  templateUrl: './registration-settlement.component.html',
  styleUrls: ['./registration-settlement.component.css']
})
export class RegistrationSettlementComponent implements OnInit {



  constructor(private _service: LogInService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._service.getArea().subscribe(areasData => {
      this.areas = areasData
    })
  }
  newArea: Area = new Area()
  areas: Area[]
  newSettlement: Settlement;
  newContactPerson:ContactPerson
  IsContactPerson: boolean = false
  settlementForm: FormGroup = new FormGroup({
    nameSettlement: new FormControl("", Validators.required),
    idArea: new FormControl("", Validators.required),
  })

  contactPersonForm: FormGroup = new FormGroup({
    // idContactPerson: new FormControl(""),
    // idSettlement: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    phone: new FormControl(""),
    gmail: new FormControl("")
  })

  openSnackBar(message: string, action: string="x") {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }

  EnterDetailsContactPerson() {
    this.IsContactPerson = true
  }
  saveNewSettlement() {
    debugger
    this.newSettlement = this.settlementForm.value;
    this.newContactPerson=this.contactPersonForm.value
    this.newContactPerson.idContactPerson=0
    this.newSettlement.idSettlement=0
    this.newSettlement.contactPer=this.newContactPerson
    this.newSettlement.idContactPer=this.newContactPerson.idContactPerson
    this._service.saveNewSettlement(this.newSettlement).subscribe(res=>{
      if(res){
        this.openSnackBar("פרטי הישוב נשמרו בצלחה")
      }
      else{
        this.openSnackBar("הישוב קיים במערכת")
      }
      this.settlementForm.reset()
      this.IsContactPerson=false

    },err=>{
      this.openSnackBar("שגיאה - אנא נסה שנית")
    })
  }
}
