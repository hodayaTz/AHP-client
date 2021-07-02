import { Component, OnInit } from '@angular/core';
import { Settlement } from 'src/app/models/settlement';

@Component({
  selector: 'app-settlements-list',
  templateUrl: './settlements-list.component.html',
  styleUrls: ['./settlements-list.component.css']
})
export class SettlementsListComponent implements OnInit {

  constructor() { }
  settlements:Settlement[];

  ngOnInit(): void {
  }

}
