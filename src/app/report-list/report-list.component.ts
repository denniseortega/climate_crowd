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

  editButtonClicked(reportToEdit: Report) {
    this.clickSender.emit(reportToEdit);
  }

  reports: Report[] = [
    new Report('Finish weekend Angular homework for Epicodus course', 3),
    new Report('Begin brainstorming possible JavaScript group projects', 2),
    new Report('Add README file to last few Angular repos on GitHub', 2)
  ];

  filterByCompleteness: string = "incompleteReports";

  onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
  }

  priorityColor(currentReport){
    if (currentReport.priority === 3){
      return "bg-danger";
    } else if (currentReport.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  toggleDone(clickedReport: Report, setCompleteness: boolean) {
     clickedReport.done = setCompleteness;
   }
}
