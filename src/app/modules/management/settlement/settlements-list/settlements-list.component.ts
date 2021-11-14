import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Settlement } from 'src/app/models/settlement';
import { SettlementService } from '../settlement.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MessageBeforeDeleteComponent } from '../../message-before-delete/message-before-delete.component';

@Component({
  selector: 'app-settlements-list',
  templateUrl: './settlements-list.component.html',
  styleUrls: ['./settlements-list.component.css']
})
export class SettlementsListComponent implements OnInit {

  constructor(public dialog: MatDialog,private _settlementService:SettlementService,private _router:Router, private route:ActivatedRoute) { }
  
  settlements$:Observable< Settlement[]>
  searchText:string
  color:string= "primary"
  displayedColumns: string[] = ['experience','name', 'details','history','delete']

  ngOnInit(): void {

    this.settlements$=this._settlementService.getSettlements()
  }
  deleteSettlement(settlement:Settlement){
      const dialogRef = this.dialog.open(MessageBeforeDeleteComponent, {
        width: '250px',
        data: {message:'האם למחוק ישוב'},
      });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._settlementService.deleteService(settlement.idSettlement).subscribe(result => {
          this.settlements$=this._settlementService.getSettlements()
        })
      }
    });
    
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
