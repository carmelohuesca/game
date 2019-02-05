import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  time: string;

  constructor() {
    this.time = new Date().toString();
    console.log(this);
  }

  ngOnInit() {
  }

}
