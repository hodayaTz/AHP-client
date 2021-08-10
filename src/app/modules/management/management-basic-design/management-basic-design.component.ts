import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any;

@Component({
  selector: 'app-management-basic-design',
  templateUrl: './management-basic-design.component.html',
  styleUrls: ['./management-basic-design.component.css']
})
export class ManagementBasicDesignComponent implements OnInit {

  lightblue:string = "#005b89";
  lightGreen:string = "#79c36f";
  
  logo = require('../../../../assets/images/logohe.png').default;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openMenu(){
    debugger
    // this.router.navigate(['/menu']);
  }

}
