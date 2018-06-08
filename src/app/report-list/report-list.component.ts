import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Report } from '../models/report.model';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent {
  @Input() childReportList: Report[];
  @Output() clickSender = new EventEmitter();

  reports: Report[] = [
    new Report('Jun 8, 2018','SAVE Organization','Alex Smith', 'alex@email.com'),
    new Report('May 24, 2018','HELP Organization', 'Mary Joe','mary@email.com'),
    new Report('April 13, 2018', 'RAISE Organization', 'Tom Jeff', 'tom@gmail.com')
  ];

}
