import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SchedulingService } from '../scheduling.service';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewSchedulingHolidayComponent } from '../new-scheduling-holiday/new-scheduling-holiday.component';



@Component({
  selector: 'app-open-scheduling-list',
  templateUrl: './open-scheduling-list.component.html',
  styleUrls: ['./open-scheduling-list.component.css']
})
export class OpenSchedulingListComponent implements OnInit {

  // constructor(private _service:SchedulingService) { }

  formNewSchedulingHoliday:FormGroup
  ngOnInit(): void {
    
  }
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewSchedulingHolidayComponent, {
      width: '250px',
    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

