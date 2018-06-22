import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewReportComponent } from './new-report/new-report.component';
import { AboutComponent } from './about/about.component';

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
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
