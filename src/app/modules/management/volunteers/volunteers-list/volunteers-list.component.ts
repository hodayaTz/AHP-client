import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Volunteer } from 'src/app/models/volunteer';
import { VolunteersService } from '../volunteers.service';



import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MessageBeforeDeleteComponent } from '../../message-before-delete/message-before-delete.component';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})
export class VolunteersListComponent implements OnInit {

  constructor(public dialog: MatDialog, private _router: Router, private _service: VolunteersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.volunteers$ = this._service.getVolunteers()
  }

  displayedColumns: string[] = ['nameAndPhone', 'details', 'history', 'delete']
  volunteers$: Observable<Volunteer[]>
  color: string = "primary"
  currentVolunteerDetails: Volunteer
  searchText: string

  getVolHistory(id: number) {
    this._router.navigate(["history/", id], { relativeTo: this.route })
  }
  
  editVolunteer(id: number) {
    this._router.navigate(["editVolunteer/", id], { relativeTo: this.route })
  }

  deleteVolunteer(volunteer: Volunteer) {
    let message_
    this._service.isPlaced(volunteer.idVolunteer).subscribe(result => {
      if (result) {
        message_ = 'הפעיל משובץ כרגע - האם אתה בטוח שברצונך למחוק פעיל זה'
      }
      else {
        message_ = 'האם אתה בטוח שברצונך למחוק פעיל זה'
      } 
      const dialogRef = this.dialog.open(MessageBeforeDeleteComponent, {
        data: { message: message_ },
        panelClass:'dialogDel'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this._service.changeStatus(volunteer).subscribe(result => {
            this.volunteers$ = this._service.getVolunteers()
          })
        }
      });
    })
  }

  addVolunteer() {
    this._router.navigate(['addVolunteer'], { relativeTo: this.route })
  }

  detailsVolunteer(currentVolunteerDetails: Volunteer) {
    this.currentVolunteerDetails = currentVolunteerDetails
  }

}


