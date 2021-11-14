import { Component, OnInit,ViewChild} from '@angular/core';
import { Holiday } from 'src/app/models/holiday';
import {  HolidaysService } from '../holidays-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MatAccordion} from '@angular/material/expansion';
import { Professional } from 'src/app/models/professional';

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.css']
})
export class HolidaysListComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  detailsHoliday(holidayId:number){
    console.log(holidayId)
    console.log()
    this._router.navigate(["/detailsHoliday",holidayId])
  }

  constructor(private _serviceHoliday:HolidaysService,private _router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.holidays$=this._serviceHoliday.getHolidays()
    // this.professional$=this._serviceHoliday.getProfessionals()
  }

  holidays$:Observable<Holiday[]>
  professional$:Observable<Professional[]>

  deleteHoliday(holidayToDelete:Holiday){
    this._serviceHoliday.deleteHoliday(holidayToDelete).subscribe(res=>{
      
    })
  }
  editProfessionals(id:number){
    this._router.navigate(["detailsHoliday/", id],{relativeTo:this.route})
  }


}
