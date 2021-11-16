import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PasswordsService } from '../../management-log-in/passwords.service';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private _servicePass:PasswordsService,private router:Router,
    public dialogRef: MatDialogRef<PasswordDialogComponent>
  ) {}

  password:string
  notCorrectPass:boolean=false
  onNoClick(): void {
    this.dialogRef.close();
  }

  checkPass(){
    this._servicePass.checkPassword(this.password).subscribe(result=>{
      if(result){
        this.router.navigate(['/management/passwords']);
        this.onNoClick()
      }
      else{
        this.notCorrectPass=true
        this.password=''
      }
    })
  }
}
