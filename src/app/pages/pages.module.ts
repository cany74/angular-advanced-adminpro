import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// // import { ChartsModule } from 'ng2-charts';
// import { BaseChartDirective } from 'ng2-charts';

import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
 import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Dona2Component } from '../components/dona2/dona2.component';
import { DonaComponent } from '../components/dona/dona.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent,
  ],
  imports: [
    // // ChartsModule,
    // BaseChartDirective,
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    SharedModule,
    Dona2Component,
    DonaComponent
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent,
  ]
})
export class PagesModule { }
