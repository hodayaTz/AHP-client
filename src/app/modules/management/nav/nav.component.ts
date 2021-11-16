import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';
import { Router } from '@angular/router';

declare var require: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog,private router:Router) { }
  ngOnInit(): void {
  }
  logo = require('../../../../assets/images/logohe.png').default;

  checkPassword() {
    const dialogRef = this.dialog.open(PasswordDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['./passwords']);
    });
  }

}
