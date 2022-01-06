import { Component, OnInit,ViewChild} from '@angular/core';
import { Holiday } from 'src/app/models/holiday';
import {  HolidaysService } from '../holidays-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatAccordion} from '@angular/material/expansion';
import { Professional } from 'src/app/models/professional';
import { MatDialog } from '@angular/material/dialog';
import { HolidayDetailsComponent } from '../holiday-details/holiday-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.css']
})
export class HolidaysListComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  // detailsHoliday(holidayId:number){
  //   this._router.navigate(["/detailsHoliday",holidayId])
  // }

  constructor(private _serviceHoliday:HolidaysService,private _router:Router,
    private route:ActivatedRoute,public dialog: MatDialog,private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.holidays$=this._serviceHoliday.getHolidays()
    // this.professional$=this._serviceHoliday.getProfessionals()
  }

  holidays$:Observable<Holiday[]>
  professional$:Observable<Professional[]>
  newProfessional:string

  deleteHoliday(holidayToDelete:Holiday){
    this._serviceHoliday.deleteHoliday(holidayToDelete).subscribe(res=>{
    })
  }
  editHoliday(id:number){
    this._router.navigate(["detailsHoliday/", id],{relativeTo:this.route})
  }
  history(id:number){
    this._router.navigate(["history/", id], { relativeTo: this.route })
  }

  newHoliday() {
    const dialogRef = this.dialog.open(HolidayDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.holidays$=this._serviceHoliday.getHolidays()
    });
  }

  AddProfessional(){
    let p=new Professional()
    p.descriptionProfessional=this.newProfessional
    p.idProfessional=0
    this._serviceHoliday.AddProfessional(p).subscribe(res=>{
      if(res){
        this.openSnackBar("המקצוע נוסף בהצלחה")
      }
      else{
        this.openSnackBar("המקצוע קיים כבר")
      }
    })
  }

  openSnackBar(message: string, action: string = "x") {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
}
