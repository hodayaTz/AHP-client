import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  settlementForm:FormGroup;
  ngOnInit(): void {
    this._activate.paramMap.subscribe(url => {
      let id = Number(url.get('id'));
      if (id != undefined) {
        this._settlementService.getSettlementById(id).subscribe(res => {
          this.settlement = res;
          this.settlementForm=new FormGroup({
            "id":new FormControl(this.settlement.idSettlement, Validators.required),
            "settlementName":new FormControl(this.settlement.nameSettlement, Validators.required),
            // "areaName":new FormControl(this.settlement.A, Validators.required), ???
            "contactPerson":new FormGroup({
              "idContactPerson":new FormControl(this.settlement.contactPerson.idContactPerson, Validators.required),
              "firstName":new FormControl(this.settlement.contactPerson.firstName, Validators.required),
              "lastName":new FormControl(this.settlement.contactPerson.lastName, Validators.required),
              "phone":new FormControl(this.settlement.contactPerson.phone, Validators.required),
              "gmail":new FormControl(this.settlement.contactPerson.gmail, Validators.required),
            })
          })
        })
      }
    })
  }

}
