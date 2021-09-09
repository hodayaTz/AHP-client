import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewSchedulingHolidayComponent } from '../new-scheduling-holiday/new-scheduling-holiday.component';
import { Observable } from 'rxjs';
import { SchedulingService } from '../../scheduling.service';
import { HolidaysService } from '../../../holidays/holidays-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-open-scheduling-list',
  templateUrl: './open-scheduling-list.component.html',
  styleUrls: ['./open-scheduling-list.component.css']
})
export class OpenSchedulingListComponent implements OnInit {
  color:string="primary"

  ngOnInit(): void {
    this.openSchedulingHolidays$=this._service.getSchedulingsHoliday().pipe(
      
    )
  }
  constructor(private _router:Router,private dialog: MatDialog,private _service:SchedulingService,private _service_holiday:HolidaysService) {}

  formNewSchedulingHoliday:FormGroup
  openSchedulingHolidays$:Observable<SchedulingHoliday[]>

  openDialog(): void {
    const dialogRef = this.dialog.open(NewSchedulingHolidayComponent, {
      width: '250px',
    });
   
    dialogRef.afterClosed().subscribe(result => {
      this.openSchedulingHolidays$=this._service.getSchedulingsHoliday()
    });
  }

  // getHolidayName(id:number){
  //   this._service_holiday.getHolidayById(id).subscribe(holiday=>{
  //     return holiday.descriptionHoliday
  //   })
  // }

  openScheduling(idSchedulingHoliday:number){
    this._router.navigate(["/openScheduling",idSchedulingHoliday])
  }
}

