import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() pieChart: any;
  constructor() { }
  ngOnInit(): void {
    this.pieGraph();
  }
  pieGraph(): void {
    console.log(this.pieChart);
    if (this.pieChart) {
      const root = am5.Root.new("pieChartDiv");
      const chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          layout: root.verticalLayout
        })
      )
      const data = [
        {
          category: "Chemistry",
          value: JSON.parse(this.pieChart.chemistry)
        },
        {
          category: "Mathematics",
          value: JSON.parse(this.pieChart.maths)
        },
        {
          category: "Operating System",
          value: JSON.parse(this.pieChart.operatingsystem)
        },
        {
          category: "Microprocessors",
          value: JSON.parse(this.pieChart.microprocessor)
        }
      ];
      const series = chart.series.push(
        am5percent.PieSeries.new(root, {
          name: "Series",
          valueField: "value",
          categoryField: "category",
          startAngle: 360,
          endAngle: 0,
          alignLabels: false,
          tooltip: am5.Tooltip.new(root, {})
        })
      );
      series.labels.template.set("text", "{category}");
      series.slices.template.set("tooltipText", "{category} :{value}");
      series.data.setAll(data);
      series.appear();
      chart.appear();
    }
  }
}
