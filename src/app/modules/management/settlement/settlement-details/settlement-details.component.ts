import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Area } from 'src/app/models/area';
import { Settlement } from 'src/app/models/settlement';
import { SettlementService } from '../settlement.service';

@Component({
  selector: 'app-settlement-details',
  templateUrl: './settlement-details.component.html',
  styleUrls: ['./settlement-details.component.css']
})
export class SettlementDetailsComponent implements OnInit {
  //הצגת ועריכת פרטי יישוב ואיש קשר???
  constructor(private _settlementService: SettlementService, private _activate: ActivatedRoute) { }

  settlement: Settlement;
  settlementForm: FormGroup;
  contactPerson: FormGroup
  areas$: Observable<Area[]>
  res:boolean
  ngOnInit(): void {
    this._activate.paramMap.subscribe(url => {
      let id = Number(url.get('id'));
      debugger
      if (id != undefined) {
        this._settlementService.getSettlementById(id).subscribe(res => {
          this.settlement = res;
          this.areas$ = this._settlementService.getArea()
          console.log(this.settlement)
          this.settlementForm = new FormGroup({
            "id": new FormControl(this.settlement.idSettlement, Validators.required),
            "settlementName": new FormControl(this.settlement.nameSettlement, Validators.required),
            "areaName": new FormControl([this.settlement.areaName], Validators.required)
          })
          this.contactPerson = new FormGroup({
            "idContactPerson": new FormControl(this.settlement.contactPer.idContactPerson, Validators.required),
            "firstName": new FormControl(this.settlement.contactPer.firstName, Validators.required),
            "lastName": new FormControl(this.settlement.contactPer.lastName, Validators.required),
            "phone": new FormControl(this.settlement.contactPer.phone, Validators.required),
            "gmail": new FormControl(this.settlement.contactPer.gmail, Validators.required),
          })
        })
      }
    })
  }
  updateSettlement() {
    this.settlement = this.settlementForm?.value
    this.settlement.contactPer = this.contactPerson?.value
    this._settlementService.updateSettlement(this.settlement).subscribe(res => {
      this.res = res
    })
  }

}
