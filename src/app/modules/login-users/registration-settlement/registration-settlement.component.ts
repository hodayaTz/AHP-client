import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Settlement } from 'src/app/models/settlement';
import { LogInService } from '../log-in.service';
import { Area } from 'src/app/models/area';
import { ContactPerson } from 'src/app/models/contactPerson';

@Component({
  selector: 'app-registration-settlement',
  templateUrl: './registration-settlement.component.html',
  styleUrls: ['./registration-settlement.component.css']
})
export class RegistrationSettlementComponent implements OnInit {



  constructor(private _service: LogInService) { }

  ngOnInit(): void {
    // debugger
    // this.newArea.areaName="dd"
    // this.newArea.idArea=4
    // this._service.addArea(this.newArea).subscribe(res=>{
    //   console.log(res)
    // })
    this._service.getArea().subscribe(areasData => {
      this.areas = areasData
      // this.areas.forEach(element => {
      //   console.log(element.areaName)
      // });
    })
  }
  newArea: Area = new Area()
  areas: Area[]
  newSettlement: Settlement;
  newContactPerson:ContactPerson
  settlementExist: boolean = true
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
    this._service.saveNewSettlement(this.newSettlement).subscribe(res => {
      this.settlementExist = res
    })
  }
}
