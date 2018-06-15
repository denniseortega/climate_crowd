import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { ReportListComponent } from './report-list/report-list.component';
import { NewReportComponent } from './new-report/new-report.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    NewReportComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
