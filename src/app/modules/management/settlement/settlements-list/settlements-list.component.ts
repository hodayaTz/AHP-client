import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Settlement } from 'src/app/models/settlement';
import { SettlementService } from '../settlement.service';

@Component({
  selector: 'app-settlements-list',
  templateUrl: './settlements-list.component.html',
  styleUrls: ['./settlements-list.component.css']
})
export class SettlementsListComponent implements OnInit {

  constructor(private _settlementService:SettlementService,private _router:Router, private route:ActivatedRoute) { }
  
  settlements:Settlement[]
  searchText:string
  color:string= "primary"
  displayedColumns: string[] = ['experience','name', 'details','history','delete']

  ngOnInit(): void {
    this._settlementService.getSettlements().subscribe(res=>{
      this.settlements = res;
      console.log(this.settlements);
    })
  }
  deleteSettlement(settlement:Settlement){
    this._settlementService.deleteService(settlement.idSettlement).subscribe(res=>{
      if (res){
        alert("the deletion succeeded!!");
        let index = this.settlements.indexOf(settlement);
        this.settlements.splice(index);
      }
      else{
        alert("the deletion did not succeed");
      }
    })
  }
  settlementDetails(id:number){
    this._router.navigate(['detailsSettlement/',id],{relativeTo:this.route});
  }
  getHistory(){}

}
