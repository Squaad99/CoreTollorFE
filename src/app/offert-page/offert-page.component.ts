import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offert-page',
  templateUrl: './offert-page.component.html',
  styleUrls: ['./offert-page.component.css']
})
export class OffertPageComponent implements OnInit {

  paneOne: boolean;
  paneTwo: boolean;

  constructor() { }

  ngOnInit() {
    this.paneOne = true;
    this.paneTwo = false;
  }

  setPageOne() {
    this.paneOne = true;
    this.paneTwo = false;
  }

  setPageTwo() {
    this.paneOne = false;
    this.paneTwo = true;
  }

}
