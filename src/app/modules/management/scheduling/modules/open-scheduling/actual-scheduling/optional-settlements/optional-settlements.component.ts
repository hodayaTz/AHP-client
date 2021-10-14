import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SettlementHoliday } from 'src/app/models/settlement-holiday';
import { ActualSchedulingService } from '../actual-scheduling.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-optional-settlements',
  templateUrl: './optional-settlements.component.html',
  styleUrls: ['./optional-settlements.component.css']
})
export class OptionalSettlementsComponent implements OnInit {

  constructor(private _service:ActualSchedulingService, private _acr: ActivatedRoute) { }
  ngOnInit(): void {
    
    this._acr.paramMap.subscribe(data => {
      if(data.has("id")) {
        console.log(data.get("id"))
        console.log(Number(data.get("id")))
        this.settlements=this._service.getSettlements(Number(data.get("id")))
      }
    })
  }
  settlements:Observable<SettlementHoliday[]>
}
