import {Component, OnInit} from '@angular/core';
import "@dvsl/zoomcharts";

@Component({
  selector: 'app-root',
  template: `
    <div class="chart-wrapper">
        <div id="chartFacetChart" class="chart"></div>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public facetChart:any = null;

  ngOnInit() {
    this.facetChart = new FacetChart({
      container: document.getElementById("chartFacetChart"),
      assetsUrlBase: '../assets',
      area: {height: 350},
      data: [{
        url: "https://zoomcharts.com/dvsl/data/pie-chart/browsers.json"
      }],
      series: [
        { data: { field: "value" } }
      ],
    });

    this.facetChart.updateSettings({
      height: 650
    });
  }
}
