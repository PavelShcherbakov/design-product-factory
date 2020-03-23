import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public startDate: Date;
  public endDate: Date;
  public leftDays: number;
  constructor() { }

  ngOnInit() {
    this.initCourseDates();
  }

  private initCourseDates() {
    this.startDate = new Date('2019-11-11');
    this.endDate = new Date('2019-08-11');
    this.leftDays = 11;
  }

}
