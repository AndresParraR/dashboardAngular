import { Component, OnInit } from '@angular/core';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrls: ['./card-statistics.component.css']
})
export class CardStatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  type: ChartType = 'Bar';
  data: IChartistData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', ''],
    series: [
      [1, 2, 4, 8, 6, 10, 7]
    ]
  };

  options: IBarChartOptions = {
    axisX: {
      showGrid: false
    },
    height: 150
  };

  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'bar') {
        data.element.animate({
          y2: <IChartistAnimationOptions>{
            dur: '0.5s',
            from: data.y1,
            to: data.y2,
            easing: 'easeOutQuad'
          }
        });
      }
    }
  };

}
