import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Settlement } from 'src/app/models/settlement';
import { SettlementService } from '../settlement.service';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-settlements-list',
  templateUrl: './settlements-list.component.html',
  styleUrls: ['./settlements-list.component.css']
})
export class SettlementsListComponent implements OnInit {

  constructor(private _settlementService:SettlementService,private _router:Router) { }
  settlements:Settlement[]
  searchText:string

  ngOnInit(): void {
    this._settlementService.getSettlements().subscribe(res=>{
      this.settlements = res;
      // console.log(this.settlements);
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
    this._router.navigate(['/detailsSettlement',id]);
  }

}
