import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { ReportListComponent } from './report-list/report-list.component';
import { NewReportComponent } from './new-report/new-report.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    NewReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
