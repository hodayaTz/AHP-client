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
        this._service.getOptionalVolunteerByHoliday(Number(data.get("id"))).subscribe(data=>{
          this.volunteers=data
          debugger
          this.dataSource = new MatTableDataSource(this.volunteers)
        })
      }
    })
    this.experienceOptionals$=this._serviceScheduling.getExperienceOption().pipe()

  }

  volunteers:OptionalVolunteer[]
  dataSource:any
  displayedColumns: string[] = ['experience','nameAndPhone', 'details','btn']
  // displayedColumns: string[] = ['icon-status', 'name+phone', 'button-details','button-ok','button-cancel','button-maby']
  experienceOptionals$:Observable<ExperienceOptional[]>

  applyFilter(event: Event ) {
    debugger
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  changeExperience(optionalVolunteer:OptionalVolunteer,newExperience:ExperienceOptional){
    //האם להשתמש בID או בתאור
    if(newExperience.descriptionExperience=='כן'){
      debugger
      this.openDialog()
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
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailsVolunteerToHolidayComponent, {
      width: '30%',
    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
