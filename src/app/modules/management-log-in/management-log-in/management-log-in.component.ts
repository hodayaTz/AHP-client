import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { PasswordsService } from '../passwords.service';

@Component({
  selector: 'app-management-log-in',
  templateUrl: './management-log-in.component.html',
  styleUrls: ['./management-log-in.component.css']
})
export class ManagementLogInComponent implements OnInit {

  constructor(private _service: PasswordsService, private _router: Router) { }

  ngOnInit(): void {
  }
  hide = true;
  checkPassword(pass: string) {
    if (pass != "") {
      this._service.checkPassword(pass).subscribe(res => {
        if (res) {
          this._router.navigate(["/management/volunteers"])
          sessionStorage.setItem("pass", "true")
        }
        else {
        }
      })
    }
  }
}
