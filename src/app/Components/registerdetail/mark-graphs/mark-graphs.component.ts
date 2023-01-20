import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
@Component({
  selector: 'app-mark-graphs',
  templateUrl: './mark-graphs.component.html',
  styleUrls: ['./mark-graphs.component.scss']
})
export class MarkGraphsComponent implements OnInit {
  @Input() barGraphData: any;
  constructor() {}
  ngOnInit(): void {
    this.showBarGraph();
  }
  showBarGraph() {
    if (this.barGraphData) {
      let root = am5.Root.new("chartdiv");
      root.setThemes([am5themes_Animated.new(root)]);
      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
      )
      const data = [
        {
          category: "Chemistry",
          value: JSON.parse(this.barGraphData.chemistry)
        },
        {
          category: "Mathematics",
          value: JSON.parse(this.barGraphData.maths)
        },
        {
          category: "OperatingSystem",
          value: JSON.parse(this.barGraphData.operatingsystem)
        },
        {
          category: "MicroProcessor",
          value: JSON.parse(this.barGraphData.microprocessor)
        }
      ];
      const yAxis = chart.yAxes.push(                          // Creating Y-axis
        am5xy.ValueAxis.new(root, {
          min: 10,
          max: 100,
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );
      const label1 = am5.Label.new(root, {
        rotation: -90,
        text: "Marks",
        y: am5.p50,
        centerX: am5.p50
        //x: am5.p0,
        //centerY: am5.p0
      })
      
      yAxis.children.unshift(
        label1
      );

      const xAxis = chart.xAxes.push(                           // Creating X-Axis
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "category"
        })
      );
      xAxis.data.setAll(data);
      const series1 = chart.series.push(                        // Creating series
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          categoryXField: "category",
          fill: am5.color("#d9b45d"),
          tooltip: am5.Tooltip.new(root, {
            keepTargetHover: true,
          })
        })
      );
   

      yAxis.get("renderer").grid.template.setAll({
        strokeWidth: 0,
        visible:false,
        location:4,
      
      });
     
      
      xAxis.get("renderer").grid.template.setAll({
        location: -3,
        strokeWidth: 1,
        visible:true,
      });

   
      series1.columns.template.setAll({
        tooltipText: "{categoryX}: {valueY}"
      });
      xAxis.set("tooltip", am5.Tooltip.new(root, {
        themeTags: ["axis"]
      }));
      series1.data.setAll(data);
      series1.appear(1000);
      chart.appear(1000, 100);
    }
  }
}
