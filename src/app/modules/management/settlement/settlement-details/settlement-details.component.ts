import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Area } from 'src/app/models/area';
import { Settlement } from 'src/app/models/settlement';
import { SettlementService } from '../settlement.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settlement-details',
  templateUrl: './settlement-details.component.html',
  styleUrls: ['./settlement-details.component.css']
})
export class SettlementDetailsComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private _settlementService: SettlementService, private _activate: ActivatedRoute) { }

  ngOnInit(): void {
    this._activate.paramMap.subscribe(data => {
      if (data.has("id")) {
        this._settlementService.getSettlementById(Number(data.get("id"))).subscribe(current_settlement => {
          this.settlement = current_settlement
          this.areas$ = this._settlementService.getArea()
        })
      }
    })
  }

  public get settlement(): Settlement {
    return this._settlement
  }
  public set settlement(s: Settlement) {
    this._settlement = s
    if (this._settlement != undefined) {
      this.settlementForm = new FormGroup({
        idSettlement: new FormControl(this.settlement.idSettlement, Validators.required),
        nameSettlement: new FormControl(this.settlement.nameSettlement, Validators.required),
        area: new FormControl(this.settlement.area, Validators.required)
      })
      this.contactPerson = new FormGroup({
        idContactPer: new FormControl(this.settlement.contactPer.idContactPerson, Validators.required),
        firstName: new FormControl(this.settlement.contactPer.firstName, Validators.required),
        lastName: new FormControl(this.settlement.contactPer.lastName, Validators.required),
        phone: new FormControl(this.settlement.contactPer.phone, Validators.required),
        gmail: new FormControl(this.settlement.contactPer.gmail, Validators.required),
      })
    }
  }

  res:boolean
  private _settlement: Settlement = new Settlement()
  settlementForm: FormGroup | undefined = undefined
  contactPerson: FormGroup | undefined = undefined
  areas$: Observable<Area[]>
  saveSucceed = false

  updateSettlement() {
    this.settlement = this.settlementForm?.value
    this.settlement.contactPer = this.contactPerson?.value
    this.settlement.isActive = this.settlement.isActive
    this.settlement.areaName = this.settlement.area.areaName
    this.settlement.idArea = this.settlement.area.idArea
    this._settlementService.updateSettlement(this.settlement).subscribe(res => {
      if (res) {
        this.openSnackBar("פרטי הישוב עודכנו בהצלחה")
      }
      else {
        this.openSnackBar("שגיאה- פרטי הישוב לא עודכנו נסה שוב")
      }
    })
  }
  openSnackBar(message: string, action: string = "x") {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
}
