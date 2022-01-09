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
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  filterSelectObj: any[];

  constructor(
    private _serviceHolidays: HolidaysService,
    private _liveAnnouncer: LiveAnnouncer,
    private _historyService: HistoryService,
    private _acr: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._serviceHolidays.getHolidays().subscribe((data) => {
      this.holidays = data;
    });
    this._acr.paramMap.subscribe((param) => {
      if (param.has('volunteer')) {
        this._historyService.getHistory().subscribe((data) => {
          this.history = data;
          this.historyWithOutFilter = data;
          this.history = this.history.filter(
            (h) => h.volunteer.idVolunteer === Number(param.get('volunteer'))
          );
          this.dataSource = new MatTableDataSource(
            this.getMapedHistory(this.history)
          );
          this.setListFilter();
        });
      } else if (param.has('settlement')) {
        this._historyService.getHistory().subscribe((data) => {
          this.history = data;
          this.historyWithOutFilter = data;
          this.history = this.history.filter(
            (h) => h.settlement.idSettlement === Number(param.get('settlement'))
          );
          this.dataSource = new MatTableDataSource(
            this.getMapedHistory(this.history)
          );
          this.setListFilter();
        });
      } else if (param.has('scheduling')) {
        this._historyService.getHistory().subscribe((data) => {
          this.history = data;
          this.historyWithOutFilter = data;
          this.history = this.history.filter(
            (h) =>
              h.scheduling.idSchedulingHoliday ===
              Number(param.get('scheduling'))
          );
          this.dataSource = new MatTableDataSource(
            this.getMapedHistory(this.history)
          );
          this.setListFilter();
        });
      } else {
        this._historyService.getHistory().subscribe((data) => {
          this.history = data;
          this.historyWithOutFilter = data;

          this.dataSource = new MatTableDataSource(
            this.getMapedHistory(this.history)
          );
          this.setListFilter();
        });
      }
    });
  }
  getMapedHistory(historyVals: any[]) {
    return historyVals.map((element, index) => ({
      year: element.scheduling.yearHoliday + '',
      holiday: element.scheduling.descripation + '',
      settlement: element.settlement.settlement.nameSettlement + '',

      volunteer:
        element.volunteer.volunteer.firstName +
        ' ' +
        element.volunteer.volunteer.lastName,
      idSettlement: element.settlement.idSettlement,
    }));
  }
  setListFilter() {
    this.filterSelectObj = [
      {
        name: 'שנה',
        columnProp: 'year',
        options: [
          ...new Set(this.history.map((x) => x.scheduling.yearHoliday)),
        ],
      },
      {
        name: 'חג',
        columnProp: 'holiday',
        options: [
          ...new Set(this.history.map((x) => x.scheduling.descripation)),
        ],
      },
      {
        name: 'ישוב',
        columnProp: 'settlement',
        options: [
          ...new Set(
            this.history.map((x) => x.settlement.settlement.nameSettlement)
          ),
        ],
      },
      {
        name: 'פעיל',
        columnProp: 'volunteer',
        options: [
          ...new Set(
            this.history.map(
              (x) =>
                x.volunteer.volunteer.firstName +
                ' ' +
                x.volunteer.volunteer.lastName
            )
          ),
        ],
      },
    ];

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      let match = true;
      const filtersList = JSON.parse(filter);
      const dataStgr = JSON.stringify(data);
      filtersList.forEach((filterObj: any) => {
        var dataFilter = JSON.stringify(filterObj);
        dataFilter = dataFilter.replace('{', '').replace('}', '');
        match =
          match &&
          dataStgr
            .toLocaleLowerCase()
            .indexOf(dataFilter.toLocaleLowerCase()) !== -1;
      });
      return match;
    };
  }
  // Get Uniqu values from columns to build filter
  getFilterObject(fullObj: any, key: any) {
    const uniqChk: any[] = [];
    fullObj.filter((obj: any) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Get remote serve data using HTTP call
  getRemoteData() {
    this.dataSource.data = this.historyWithOutFilter;

    this.filterSelectObj.filter((o) => {
      o.options = this.getFilterObject(this.historyWithOutFilter, o.columnProp);
    });
  }
  filterValues: any[] = [];
  filterValuesArr: any[] = [];
  // Called on Filter change
  filterChange(filter: any, event: any) {
    var key = filter.columnProp;
    var obj: any = {};
    var isExists = false;
    obj[key] = event.target.value;
    for (let index = 0; index < this.filterValues.length; index++) {
      if (this.filterValues[index][key]) {
        this.filterValues[index][key] = event.target.value;
        isExists = true;
      }
    }
    if (!isExists) {
      this.filterValues.push(obj);
    }
    var filterV = JSON.stringify(this.filterValues);
    //  filterV ="["+filterV+"]";
    //  filterV = filterV.replace('{','').replace('}','');
    //   if(filterV === "[]")
    //  {
    //    this.dataSource.filter = '';
    //  }
    //    else{
    this.dataSource.filter = filterV;
  }
  //}

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col]
              .trim()
              .toLowerCase()
              .split(' ')
              .forEach((word: any) => {
                if (
                  data[col].toString().toLowerCase().indexOf(word) != -1 &&
                  isFilterSet
                ) {
                  found = true;
                }
              });
          }
          return found;
        } else {
          return true;
        }
      };
      return nameSearch();
    };
    return filterFunction;
  }

  // Reset table filters
  resetFilters() {
    this.filterValues = [];
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = undefined;
    });
    this.dataSource.filter = '';
  }

  history: HistoryScheduling[];
  displayedColumns: string[] = ['year', 'holiday', 'settlement', 'volunteer'];
  dataSource: any;
  holidays: Holiday[];
  historyWithOutFilter: HistoryScheduling[];

  @ViewChild(MatSort) sort: MatSort;

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  exportexcel(): void {
    /* table id is passed over here */
    let fileName = 'history.xlsx';
    let element = document.getElementById('historyTable');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, fileName);
  }
}
