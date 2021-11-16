import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PasswordsService } from 'src/app/modules/management-log-in/passwords.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private _servicePass:PasswordsService,
    public dialogRef: MatDialogRef<NewPasswordComponent>
  ) {}

  password:string
  onNoClick(): void {
    this.dialogRef.close();
  }

}
