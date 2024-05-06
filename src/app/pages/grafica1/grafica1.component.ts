

import { Component } from '@angular/core';
// import { ChartData, ChartEvent, ChartType } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';
// // import { ChartHostComponent } from '../chart-host/chart-host.component';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './grafica1.component.html',
  // templateUrl: './doughnut-chart.component.html',
  // styleUrls: ['./doughnut-chart.component.scss'],
  // standalone: true,
  // imports: [BaseChartDirective],
  // imports: [ChartHostComponent, BaseChartDirective],
})
export class Grafica1Component {

  public labels1: string[]= ['uno', 'dos', 'tres'];
  public data1 = [10, 15, 40];

  // // Doughnut
  // public doughnutChartLabels: string[] = [
  //   'Download Sales',
  //   'In-Store Sales',
  //   'Mail-Order Sales',
  // ];
  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     { data: [350, 450, 100] },
  //     // { data: [50, 150, 120] },
  //     // { data: [250, 130, 70] },
  //   ],
  // };
  // public doughnutChartType: ChartType = 'doughnut';

  // // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: object[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: object[];
  // }): void {
  //   console.log(event, active);
  // }
}

// import { Component } from '@angular/core';

// import { ChartData, ChartEvent, ChartType } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';
// // import { ChartHostComponent } from '../chart-host/chart-host.component';

// @Component({
//   selector: 'app-grafica1',
//   templateUrl: './grafica1.component.html',
//   styles: [
//   ]
// })
// export class Grafica1Component {
//   // Doughnut
//   public doughnutChartLabels: string[] = [
//     'Download Sales',
//     'In-Store Sales',
//     'Mail-Order Sales',
//   ];
//   public doughnutChartData: ChartData<'doughnut'> = {
//     labels: this.doughnutChartLabels,
//     datasets: [
//       { data: [350, 450, 100] },
//       { data: [50, 150, 120] },
//       { data: [250, 130, 70] },
//     ],
//   };
//   public doughnutChartType: ChartType = 'doughnut';
// }
