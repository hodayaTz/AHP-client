import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-completion-scheduling',
  templateUrl: './completion-scheduling.component.html',
  styleUrls: ['./completion-scheduling.component.css']
})
export class CompletionSchedulingComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CompletionSchedulingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
