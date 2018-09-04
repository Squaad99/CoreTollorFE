import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-page',
  templateUrl: './time-page.component.html',
  styleUrls: ['./time-page.component.css']
})
export class TimePageComponent implements OnInit {

  periodStatus: boolean;
  sumStatus: boolean;

  constructor() { }

  ngOnInit() {
    this.periodStatus = false;
  }

  togglePeriodStatus(event){
    if ( event.target.checked ) {
      this.periodStatus = true;
    } else {
      this.periodStatus = false;
    }
  }

  toggleSumStatus(event){
    if ( event.target.checked ) {
      this.sumStatus = true;
    } else {
      this.sumStatus = false;
    }
  }

}
