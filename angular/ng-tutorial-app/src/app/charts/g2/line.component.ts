import { Component, OnInit } from '@angular/core';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-charts',
  templateUrl: './line.component.html',
})
export class G2LineComponent implements OnInit {
  data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  constructor() {}
  ngOnInit(): void {
    const chart = new Chart({
      container: 'g2-line',
      autoFit: true,
      height: 300,
    });

    chart.data(this.data);
    chart.scale({
      year: {
        range: [0, 1],
      },
      value: {
        min: 0,
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true, // 展示 Tooltip 辅助线
      shared: true,
    });

    chart.line().position('year*value').label('value');
    chart.point().position('year*value');

    chart.render();
  }
}
