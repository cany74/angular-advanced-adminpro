import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
// import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [
    IncrementComponent,
    // DonaComponent
  ],
  exports:[
    IncrementComponent,
    // DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // ChartsModule,
    BaseChartDirective,
  ]
})
export class ComponentsModule { }
