import { Component, OnInit } from '@angular/core';
import { OptionalVolunteer } from 'src/app/models/optional_volunteer';
import { OpenSchedulingService } from '../open-scheduling.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ExperienceOptional } from 'src/app/models/experience_optional';
import { DetailsVolunteerToHolidayComponent } from '../details-volunteer-to-holiday/details-volunteer-to-holiday.component';
import { MatDialog } from '@angular/material/dialog';
import { Volunteer } from 'src/app/models/volunteer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SchedulingService } from '../../scheduling.service';


@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private dialog: MatDialog,private _service:OpenSchedulingService,
    private _acr: ActivatedRoute,private _serviceScheduling:SchedulingService) { }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(data=>{
      if(data.has("id")){
        this.schedulingHolidayId=Number(data.get("id"))
        this.getOptinalVolunteers()
      }
    })
    this.experienceOptionals$=this._serviceScheduling.getExperienceOption().pipe()
  }
  primary:string="primary"
  schedulingHolidayId:number
  volunteers:OptionalVolunteer[]
  dataSource:any
  displayedColumns: string[] = ['experience','nameAndPhone', 'details','btn']
  experienceOptionals$:Observable<ExperienceOptional[]>
  currentStatus:number=-1

  getOptinalVolunteers(){
    this._service.getOptionalVolunteerByHoliday(this.schedulingHolidayId).subscribe(data=>{
      this.volunteers=data
      this.dataSource = new MatTableDataSource(this.volunteers.filter(v=>v.idExperience==0||v.idExperience==3))
      this.dataSource.filterPredicate = (data: OptionalVolunteer, filter:string) => {
        return (data.volunteer.firstName+" "+data.volunteer.lastName).includes(filter)
      }
      // this.showOnly(this.currentStatus)
    })
  }

  applyFilter(event: Event ) {
    debugger
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  changeExperience(optionalVolunteer:OptionalVolunteer,newExperience:ExperienceOptional){
    if(newExperience.idExperience===1){
      let res=this.openDialog(optionalVolunteer.idVolunteer,newExperience.idExperience,optionalVolunteer)

    }
    else{
      if(optionalVolunteer.idExperience==1){
        //למחוק מהטבלה של holidayvolunteer
        this._service.deleteVolunteerHoliday(optionalVolunteer.idSchedulingHoliday,optionalVolunteer.idVolunteer)
      }
      this._serviceScheduling.changeExperience(optionalVolunteer,newExperience.idExperience).subscribe(result=>{
        this.getOptinalVolunteers()
      })
    }
  }

  openDialog(idVolunteer:number,experience:number,_optionalVolunteer:OptionalVolunteer): void {
    const dialogRef = this.dialog.open(DetailsVolunteerToHolidayComponent, {
      width: 'auto',
      data: {volunteer: idVolunteer, scheduling: this.schedulingHolidayId,idExperience:experience,optionalVolunteer:_optionalVolunteer},
      
    });
    dialogRef.disableClose=true
    dialogRef.afterClosed().subscribe(result => {
      this.getOptinalVolunteers()
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

  openSnackBar(message: string, action: string="x") {
    this._snackBar.open(message, action,{
      duration: 3000
    });
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
}
