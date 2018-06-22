import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewReportComponent } from './new-report/new-report.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportListComponent } from './report-list/report-list.component';

const appRoutes: Routes = [
  {
      path: '',
      component: WelcomeComponent
    },
  {
    path: 'newreport',
    component: NewReportComponent
   },
 {
   path: 'about',
   component: AboutComponent
  },
{
  path: 'projects',
  component: ProjectsComponent
 },
{
 path: 'reportList',
 component: ReportListComponent
},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
