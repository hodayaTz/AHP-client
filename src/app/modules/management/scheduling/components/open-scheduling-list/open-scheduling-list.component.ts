import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SchedulingHoliday } from 'src/app/models/scheduling-holiday';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewSchedulingHolidayComponent } from '../new-scheduling-holiday/new-scheduling-holiday.component';
import { Observable } from 'rxjs';
import { SchedulingService } from '../../scheduling.service';
import { HolidaysService } from '../../../holidays/holidays-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OpenScedulingBasicComponent } from '../../open-scheduling/open-sceduling-basic/open-sceduling-basic.component';


export interface DialogDataScheduling {
  id:number
}

@Component({
  selector: 'app-open-scheduling-list',
  templateUrl: './open-scheduling-list.component.html',
  styleUrls: ['./open-scheduling-list.component.css']
})
export class OpenSchedulingListComponent implements OnInit {

  ngOnInit(): void {
    this.openSchedulingHolidays$=this._service.getSchedulingsHoliday().pipe(
      
    )
  }
  constructor( private route:ActivatedRoute,private _router:Router,private dialog: MatDialog,private _service:SchedulingService,private _service_holiday:HolidaysService) {}

  formNewSchedulingHoliday:FormGroup
  openSchedulingHolidays$:Observable<SchedulingHoliday[]>
  color:string="primary"

  openDialog(): void {
    const dialogRef = this.dialog.open(NewSchedulingHolidayComponent, {
      width: 'auto',
    });
   
    dialogRef.afterClosed().subscribe(result => {
      this.openSchedulingHolidays$=this._service.getSchedulingsHoliday()
    });
  }

  openDialogChooseScheduling(idScheduling:number): void {
    const dialogRef = this.dialog.open(OpenScedulingBasicComponent, {
      width: '40%',
      data:{id:idScheduling}
    });
    dialogRef.disableClose=true
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
    this._router.navigate(["openScheduling",idSchedulingHoliday],{relativeTo:this.route})
  }
}

