import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { PasswordsService } from 'src/app/modules/management-log-in/passwords.service';
import { MatDialog } from '@angular/material/dialog';
import { NewPasswordComponent } from '../new-password/new-password.component';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.css']
})
export class PasswordsComponent implements OnInit {

  constructor(private _service: PasswordsService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.passwords$=this._service.getPasswords()
    this._service.getPasswords().subscribe(data => {
      this.passwords = data
      this.hides = Array(this.passwords.length).fill(true)
    })
  }
  passwords: string[]
  hides: boolean[]

  hide = true;
  addPassword() {
    const dialogRef = this.dialog.open(NewPasswordComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._service.addPassword(res).subscribe(result => {
          if (result) {
            this.openSnackBar("הסיסמה נוספה בהצלחה")
            this._service.getPasswords().subscribe(data => {
              this.passwords = data
              this.hides = Array(this.passwords.length).fill(true)
            })
          }
          else {
            this.openSnackBar("הסיסמה קיימת כבר")
          }
        })
      }
    });
  }
  openSnackBar(message: string, action: string = "x") {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
  checkHide(i: number) {
    if (this.hide == false || this.hides[i] == false) {
      return true
    }
    return false
  }

  changeAll() {
    this.hide = !this.hide
    this.hides.fill(this.hide)
  }
}
