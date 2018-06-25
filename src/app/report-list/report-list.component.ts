import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Report } from '../models/report.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent {
  
  constructor(private router: Router){}

  @Input() childReportList: Report[];
  @Output() clickSender = new EventEmitter();

  reports: Report[] = [
    new Report('SAVE Organization', 'Alex'),
    new Report('Mary','HELP Organization'),
    new Report('Tom', 'RAISE Organization')
  ];

  goToDetailPage(clickedReport: Report){
    this.router.navigate(['reports', clickedReport.id]);
  };
}
