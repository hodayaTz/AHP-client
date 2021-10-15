import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor() { 
  }
  logo = require('../../../../assets/images/logohe.png').default;
  ngOnInit(): void {
  }

}




