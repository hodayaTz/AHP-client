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
  
  ngOnInit(): void {
    this.settlements$=this._settlementService.getSettlements()
  }

  settlements$:Observable< Settlement[]>
  searchText:string
  color:string= "primary"
  displayedColumns: string[] = ['name', 'details','history','delete']

  deleteSettlement(settlement:Settlement){
    let message_
    this._settlementService.isPlaced(settlement.idSettlement).subscribe(result => {
      if (result) {
        message_ = 'הישוב משובץ כרגע - האם אתה בטוח שברצונך למחוק ישוב זה?'
      }
      else {
        message_ = 'האם אתה בטוח שברצונך למחוק ישוב זה?'
      } 
      const dialogRef = this.dialog.open(MessageBeforeDeleteComponent, {
        panelClass:'dialogDel',
        data: { message: message_ },
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this._settlementService.deleteService(settlement.idSettlement).subscribe(result => {
            this.settlements$=this._settlementService.getSettlements()
          })
        }
      });
    })
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
