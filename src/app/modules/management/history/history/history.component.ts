import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { HistoryService } from '../histort.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { ActivatedRoute } from '@angular/router';
import { HistoryScheduling } from 'src/app/models/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  history: HistoryScheduling[]
  ngOnInit(): void {
    this._acr.paramMap.subscribe(param => {
      if (param.has("volunteer")) {
        this._historyService.getHistory().subscribe(data => {
          this.history = data
          this.history=this.history.filter(h=>h.volunteer.idVolunteer===Number(param.get("volunteer")))
          this.dataSource = new MatTableDataSource(this.history);
        })
      }
      if (param.has("settlement")) {
        this._historyService.getHistory().subscribe(data => {
          this.history = data
          this.history=this.history.filter(h=>h.settlement.idSettlement===Number(param.get("settlement")))
          this.dataSource = new MatTableDataSource(this.history);
        })
      }
      if (param.has("history")) {
        this._historyService.getHistory().subscribe(data => {
          this.history = data
          this.history=this.history.filter(h=>h.scheduling.idSchedulingHoliday===Number(param.get("history")))
          this.dataSource = new MatTableDataSource(this.history);
        })
      }
      else{
        this._historyService.getHistory().subscribe(data => {
          this.history = data
          this.dataSource = new MatTableDataSource(this.history);
        })
      }
    })
  }

  displayedColumns: string[] = ['year', 'holiday', 'settlement', 'volunteer'];
  dataSource:any

  constructor(private _liveAnnouncer: LiveAnnouncer, private _historyService: HistoryService, private _acr: ActivatedRoute) { }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
