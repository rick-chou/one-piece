import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-echarts-line',
  templateUrl: './line.component.html',
})
export class EchartsLineComponent implements OnInit {
  option: echarts.EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };
  constructor() {}
  ngOnInit(): void {
    var chartDom = document.getElementById('line')!;
    var myChart = echarts.init(chartDom);
    this.option && myChart.setOption(this.option);
  }
}
