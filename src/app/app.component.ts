import { Component } from '@angular/core';
import { Report } from './models/report.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WWF Climate Crowd';
  currentFocus: string = 'Climate Crowd Reports';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedReport = null;

  masterReportList: Report[] = [
    new Report('Jun 8, 2018','SAVE Organization','Alex Smith', 'alex@email.com'),
    new Report('May 24, 2018','HELP Organization', 'Mary Joe','mary@email.com'),
    new Report('April 13, 2018', 'RAISE Organization', 'Tom Jeff', 'tom@gmail.com')
  ];

  addReport(newReport: Report) {
    this.masterReportList.push(newReport);
  }
}
