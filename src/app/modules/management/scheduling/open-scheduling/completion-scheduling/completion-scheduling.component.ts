import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActualSchedulingService } from '../actual-scheduling.service';

@Component({
  selector: 'app-completion-scheduling',
  templateUrl: './completion-scheduling.component.html',
  styleUrls: ['./completion-scheduling.component.css']
})
export class CompletionSchedulingComponent implements OnInit {

  constructor(private _service:ActualSchedulingService,
    public dialogRef: MatDialogRef<CompletionSchedulingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  sendEmailToSettlements(){
    this._service.sendEmailToSettlements(this.data.scheduling).subscribe(result=>{

    })
  }

  sendEmailToVolunteers(){
    this._service.sendEmailToVolunteers(this.data.scheduling).subscribe(result=>{
      
    })
  }

  closeScheduling(){
    this._service.closeScheduling(this.data.scheduling).subscribe(result=>{
    })
  }
}
