import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Holiday } from 'src/app/models/holiday';
import { HolidaysService } from '../holidays-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {

  constructor( private _acr: ActivatedRoute,private _serviceHoliday:HolidaysService ) { }

  ngOnInit(): void {
    this.holiday=new Holiday()
    this.holiday.descriptionHoliday=""
    this._acr.paramMap.subscribe(data=>{
      if(data.has("id")){
        this._serviceHoliday.getHolidayById(Number(data.get("id"))).subscribe(h=>{
          console.log(h.descriptionHoliday)
          this.holiday= h;
        })
      }
    })
  }
  private _holiday:Holiday=new Holiday()

  public get holiday(): Holiday {
    return this._holiday;
  }
  public set holiday(h:Holiday){
    this._holiday=h
  }

}
