import { Component, OnInit } from '@angular/core';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';
import { OpenSchedulingService } from '../open-scheduling.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  primary:string="primary"
  constructor(private _service:OpenSchedulingService,private _acr: ActivatedRoute) { }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(data=>{
      if(data.has("id")){
        this._service.getOptionalVolunteerByHoliday(Number(data.get("id"))).subscribe(data=>{
          this.volunteers=data
          debugger
          this.dataSource = new MatTableDataSource(this.volunteers)
        })
      }
    })
  }

  volunteers:OptionalVolunteer[]
  dataSource:any
  displayedColumns: string[] = ['experience','nameAndPhone', 'details','btn']
  // displayedColumns: string[] = ['icon-status', 'name+phone', 'button-details','button-ok','button-cancel','button-maby']


  applyFilter(event: Event ) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  a(){
    console.log("sss")
  }
}
