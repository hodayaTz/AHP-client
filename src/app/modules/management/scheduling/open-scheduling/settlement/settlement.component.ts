import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenSchedulingService } from '../open-scheduling.service';
import { ActivatedRoute } from '@angular/router';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';
import { Observable } from 'rxjs';
import { ExperienceOptional } from 'src/app/models/experience_optional';
import { MatTableDataSource } from '@angular/material/table';
import { DetailsVolunteerToHolidayComponent } from '../details-volunteer-to-holiday/details-volunteer-to-holiday.component';
import { OptionalSettlement } from 'src/app/models/optional-settlement';
import { DetailsSettlementToHolidayComponent } from '../details-settlement-to-holiday/details-settlement-to-holiday.component';
import { SchedulingService } from '../../scheduling.service';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  constructor(private dialog: MatDialog,private _service:OpenSchedulingService,private _acr: ActivatedRoute,private _serviceScheduling:SchedulingService) { }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(data=>{
      if(data.has("id")){
        this.schedulingHolidayId=Number(data.get("id"))
        this.getOptinalSettlements()
      }
    })
    this.experienceOptionals$=this._serviceScheduling.getExperienceOption().pipe()
  }
  
  primary:string="primary"
  schedulingHolidayId:number
  settlements:OptionalSettlement[]
  dataSource:any
  displayedColumns: string[] = ['experience','nameAndLocation','contactPer', 'details','btn']
  experienceOptionals$:Observable<ExperienceOptional[]>
  currentStatus:number=-1

  getOptinalSettlements(){
    this._service.getOptionalSettlementByHoliday(this.schedulingHolidayId).subscribe(data=>{
      this.settlements=data
      let temp=new Array(4).fill(0)
      this.settlements.forEach(s=>{
        if(s.idExperience===null){
          temp[0]+=1
        }
        else{
          temp[s.idExperience]+=1
        }
      })
      this.pieChartData=[]
      this.pieChartData.push(...[temp])
      this.dataSource = new MatTableDataSource(this.settlements.filter(v=>v.idExperience==0||v.idExperience==3))
      this.dataSource.filterPredicate = (data: OptionalSettlement, filter:string) => {
        return data.settlement.nameSettlement.includes(filter)  
      }
    })
  }

  applyFilter(event: Event ) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  changeExperience(optionalSettlement:OptionalSettlement,newExperience:ExperienceOptional){
    if(newExperience.idExperience==1){
      this.openDialog(optionalSettlement.idSettlement,newExperience.idExperience,optionalSettlement)
    }
    else{
      if(optionalSettlement.idExperience==1){
      }
      this._serviceScheduling.changeExperienceSettlement(optionalSettlement,newExperience.idExperience).subscribe(result=>{
      })
    }
    this.getOptinalSettlements()
  }

  openDialog(idSettlement:number,experience:number,_OptionalSettlement:OptionalSettlement): void {
    const dialogRef = this.dialog.open(DetailsSettlementToHolidayComponent, {
      width: 'auto',
      data: {settlement: idSettlement, scheduling: this.schedulingHolidayId,idExperience:experience,optionalSettlement:_OptionalSettlement}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  showOnly(idExperience:number){
    if(idExperience==-1 ){
      this.dataSource=new MatTableDataSource(this.settlements)
      return
    }
    this.dataSource=new MatTableDataSource(this.settlements.filter(s=>s.idExperience==idExperience))
    this.currentStatus=idExperience
  }

  getExperienceDescription(id:number):string{
    switch (id) {
      case 1:
        return 'הרשמה לחג'
        break;
      case 2:
        return 'דחייה'
        break;
      case 3:
        return 'ספק'
        break;
      default:
        return ''
        break;
    }
  }
  getExperienceDescriptionGeneral(id:number):string{
    switch (id) {
      case 1:
        return 'הצג רק רשומים'
        break;
      case 2:
        return 'הצג דחויים'
        break;
      case 3:
        return 'הצג רק בספק'
        break;
      default:
        return ''
        break;
    }
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['לא טופל','רשומים', 'דחויים', 'בספק'];
  public pieChartData: SingleDataSet=[0,0,0,0] ;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
