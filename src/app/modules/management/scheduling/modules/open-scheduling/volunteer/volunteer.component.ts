import { Component, OnInit } from '@angular/core';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';
import { OpenSchedulingService } from '../open-scheduling.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SchedulingService } from '../../../scheduling.service';
import { Observable } from 'rxjs';
import { ExperienceOptional } from 'src/app/models/experience_optional';
import { DetailsVolunteerToHolidayComponent } from '../details-volunteer-to-holiday/details-volunteer-to-holiday.component';
import { MatDialog } from '@angular/material/dialog';
import { Volunteer } from 'src/app/models/volunteer';


@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  primary:string="primary"
  constructor(private dialog: MatDialog,private _service:OpenSchedulingService,private _acr: ActivatedRoute,private _serviceScheduling:SchedulingService) { }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(data=>{
      if(data.has("id")){
        this.schedulingHolidayId=Number(data.get("id"))
        this.getOptinalVolunteers()
      }
    })
    this.experienceOptionals$=this._serviceScheduling.getExperienceOption().pipe()
  }

  schedulingHolidayId:number
  volunteers:OptionalVolunteer[]
  dataSource:any
  displayedColumns: string[] = ['experience','nameAndPhone', 'details','btn']
  // displayedColumns: string[] = ['icon-status', 'name+phone', 'button-details','button-ok','button-cancel','button-maby']
  experienceOptionals$:Observable<ExperienceOptional[]>
  currentStatus:number=-1

  getOptinalVolunteers(){
    this._service.getOptionalVolunteerByHoliday(this.schedulingHolidayId).subscribe(data=>{
      this.volunteers=data
      this.dataSource = new MatTableDataSource(this.volunteers.filter(v=>v.idExperience==0||v.idExperience==1))
      // this.dataSource.filterPredicate =(data: Volunteer, filter: string) => !filter || data.firstName+data.lastName == filter;
      this.showOnly(this.currentStatus)
    })
  }

  applyFilter(event: Event ) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
    
    // this.dataSource = new MatTableDataSource(this.volunteers.filter(v=>(v.volunteer.firstName+" "+v.volunteer.lastName).includes(filterValue)))
  }

  changeExperience(optionalVolunteer:OptionalVolunteer,newExperience:ExperienceOptional){
    //האם להשתמש בID או בתאור
    if(newExperience.descriptionExperience=='כן'){
      this.openDialog(optionalVolunteer.idVolunteer)
    }
    else{
      if(optionalVolunteer.idExperience==1){
        //למחוק מהטבלה של holidayvolunteer
        this._service.deleteVolunteerHoliday(optionalVolunteer.idSchedulingHoliday,optionalVolunteer.idVolunteer)
      }
      this._serviceScheduling.changeExperience(optionalVolunteer,newExperience.idExperience).subscribe(result=>{
        console.log(result)
      })
    }
    this.getOptinalVolunteers()
  }

  openDialog(idVolunteer:number): void {
    const dialogRef = this.dialog.open(DetailsVolunteerToHolidayComponent, {
      width: 'auto',
      data: {volunteer: idVolunteer, scheduling: this.schedulingHolidayId},
      
    });
    dialogRef.disableClose=true
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  showOnly(idExperience:number){
    if(idExperience==-1 ){
      this.dataSource=new MatTableDataSource(this.volunteers)
      return
    }
    this.dataSource=new MatTableDataSource(this.volunteers.filter(v=>v.idExperience==idExperience))
    this.currentStatus=idExperience
  }
}
