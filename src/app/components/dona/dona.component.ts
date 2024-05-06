import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
// import { ChartHostComponent } from '../chart-host/chart-host.component';

@Component({
  selector: 'app-dona',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {
    @Input() title: string = 'sin título';

    // Doughnut
    // public doughnutChartLabels: string[] = [
     @Input('labels') doughnutChartLabels: string[] = [
      'Label1',
      'Label2',
      'Label3',
    ];
    @Input() public data1: number[] = [350, 450, 100];

    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.data1 },
        // { data: [50, 150, 120] },
        // { data: [250, 130, 70] },
      ],
    };
    public doughnutChartType: ChartType = 'doughnut';

    // events
    public chartClicked({
      event,
      active,
    }: {
      event: ChartEvent;
      active: object[];
    }): void {
      console.log(event, active);
    }

    public chartHovered({
      event,
      active,
    }: {
      event: ChartEvent;
      active: object[];
    }): void {
      console.log(event, active);
    }
}
