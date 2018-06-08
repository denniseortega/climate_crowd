import { Component, Output, EventEmitter } from '@angular/core';
import { Report } from '../models/report.model';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent {
  @Output() sendReport = new EventEmitter();

  submitForm (date: string, organization: string, name: string, email: string) {
    let newReport: Report = new Report(date, organization, name, email);
    this.sendReport.emit(newReport);
  }
}
