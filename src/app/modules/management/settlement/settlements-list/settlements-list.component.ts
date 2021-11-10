import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Settlement } from 'src/app/models/settlement';
import { SettlementService } from '../settlement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settlements-list',
  templateUrl: './settlements-list.component.html',
  styleUrls: ['./settlements-list.component.css']
})
export class SettlementsListComponent implements OnInit {

  constructor(private _settlementService:SettlementService,private _router:Router, private route:ActivatedRoute) { }
  
  settlements$:Observable< Settlement[]>
  searchText:string
  color:string= "primary"
  displayedColumns: string[] = ['experience','name', 'details','history','delete']

  ngOnInit(): void {

    this.settlements$=this._settlementService.getSettlements()
  }
  deleteSettlement(settlement:Settlement){
    this._settlementService.deleteService(settlement.idSettlement).subscribe(result => {
      console.log(result)
    })
    this.settlements$=this._settlementService.getSettlements()
  }
  addNewSettlement(){
    this._router.navigate(['addSettlement'],{relativeTo:this.route})
  }
  settlementDetails(id:number){
    this._router.navigate(['detailsSettlement/',id],{relativeTo:this.route});
  }
  getHistory(id:number){
    this._router.navigate(["history/", id],{relativeTo:this.route})
  }

}
