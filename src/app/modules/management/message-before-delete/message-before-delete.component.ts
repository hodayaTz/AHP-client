import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogDeleteData{
  message:string
}
@Component({
  selector: 'app-message-before-delete',
  templateUrl: './message-before-delete.component.html',
  styleUrls: ['./message-before-delete.component.css']
})
export class MessageBeforeDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MessageBeforeDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDeleteData,
  ) {}
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
