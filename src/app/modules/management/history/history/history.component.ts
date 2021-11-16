import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { HistoryService } from '../histort.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { ActivatedRoute } from '@angular/router';
import { HistoryScheduling } from 'src/app/models/history';
import { HolidaysService } from '../../holidays/holidays-service.service';
import { Holiday } from 'src/app/models/holiday';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: HistoryScheduling[]
  ngOnInit(): void {
    this._serviceHolidays.getHolidays().subscribe(data => {
      this.holidays = data
    })
    this._acr.paramMap.subscribe(param => {
      if (param.has("volunteer")) {
        this._historyService.getHistory().subscribe(data => {
          this.history = data
          this.historyWithOutFilter = data
          this.history = this.history.filter(h => h.volunteer.idVolunteer === Number(param.get("volunteer")))
          this.dataSource = new MatTableDataSource(this.history);
        })
      }
      else if (param.has("settlement")) {
        this._historyService.getHistory().subscribe(data => {
          this.history = data
          this.historyWithOutFilter = data
          this.history = this.history.filter(h => h.settlement.idSettlement === Number(param.get("settlement")))
          this.dataSource = new MatTableDataSource(this.history);
        })
      }
      else if (param.has("scheduling")) {
        this._historyService.getHistory().subscribe(data => {
          this.history = data
          this.historyWithOutFilter = data
          this.history = this.history.filter(h => h.scheduling.idSchedulingHoliday === Number(param.get("scheduling")))
          this.dataSource = new MatTableDataSource(this.history);
        })
      }
      else {
        this._historyService.getHistory().subscribe(data => {
          this.history = data
          this.historyWithOutFilter = data
          this.dataSource = new MatTableDataSource(this.history);
        })
      }
    })
  }

  displayedColumns: string[] = ['year', 'holiday', 'settlement', 'volunteer'];
  dataSource: any
  holidays: Holiday[]
  historyWithOutFilter: HistoryScheduling[]

  constructor(private _serviceHolidays: HolidaysService, private _liveAnnouncer: LiveAnnouncer, private _historyService: HistoryService, private _acr: ActivatedRoute) { }

  @ViewChild(MatSort) sort: MatSort;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

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

  applyFilter(filterValue: string, column: string) {
    // const filterValue = (event.target as HTMLInputElement).value;
    switch (column) {
      case 'year':
        this.history = this.historyWithOutFilter.filter(h => h.scheduling.yearHoliday.toString().includes(filterValue))
        this.dataSource = new MatTableDataSource(this.history);
        break;
      case 'holiday':
        this.history = this.historyWithOutFilter.filter(h => h.scheduling.descripation.includes(filterValue))
        this.dataSource = new MatTableDataSource(this.history);
        break;
      case 'settlement':
        this.history = this.history.filter(h => h.settlement.settlement.nameSettlement.includes(filterValue))
        this.dataSource = new MatTableDataSource(this.history);
        break;
      case 'volunteer':
        this.history = this.history.filter(h => (h.volunteer.volunteer.firstName + " " + h.volunteer.volunteer.lastName).includes(filterValue))
        this.dataSource = new MatTableDataSource(this.history);
        break;
      default:
        break;
    }
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportexcel(): void {
    /* table id is passed over here */
    let fileName = 'ExcelSheet.xlsx';
    let element = document.getElementById('historyTable');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, fileName);
  }
}
