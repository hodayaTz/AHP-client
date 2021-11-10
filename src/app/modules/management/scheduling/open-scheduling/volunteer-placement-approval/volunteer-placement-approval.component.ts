import { Component, OnInit } from '@angular/core';
import { DialogDataVolunteer } from '../scheduling-actual/scheduling-actual.component';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActualSchedulingService } from '../actual-scheduling.service';
import { SettlementService } from 'src/app/modules/management/settlement/settlement.service';
@Component({
  selector: 'app-volunteer-placement-approval',
  templateUrl: './volunteer-placement-approval.component.html',
  styleUrls: ['./volunteer-placement-approval.component.css']
})
export class VolunteerPlacementApprovalComponent implements OnInit {

  constructor(private _service:ActualSchedulingService,private _settlementService:SettlementService,
    public dialogRef: MatDialogRef<VolunteerPlacementApprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataVolunteer) { }
  
  choose(): void {
    this._service.saveVolunteerToSettlement(this.data.settlement.settlement.idSettlement,this.data.volunteer).subscribe(result=>{
      
    })
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  currentSettlement:string
  ngOnInit(): void {
    this._settlementService.getSettlementById(this.data.currentSettlement).subscribe(settlement=>{
      this.currentSettlement=settlement.nameSettlement
    })
  }

}
