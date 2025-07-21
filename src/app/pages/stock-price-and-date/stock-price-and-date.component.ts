import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { LabelType, Options } from '@angular-slider/ngx-slider'
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef
} from '@angular/core'
import { NgbModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import * as Plotly from 'plotly.js-dist-min';

// PlotlyModule.plotlyjs = PlotlyJS


@Component({
  standalone: true,
  selector: 'app-stock-price-and-date',
  imports: [NgbModule, NgxSliderModule, CommonModule],
  templateUrl: './stock-price-and-date.component.html',
  styleUrl: './stock-price-and-date.component.scss'
})
export class StockPriceAndDateComponent implements OnInit{
  @ViewChild('plotlyChart', { static: true }) plotlyChart!: ElementRef;

  dates: string[] = [];
  gold: number[] = [];
  sp500: number[] = [];

  interval: any;
  currentIndex = 1;

  constructor(
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal
  ) { }
  
  getRouterURL() {
    return this.router.url
  }
  navigate(url: string) {
    this.router.navigate([url])
  }

  ngOnInit() {
    this.generateData();
    this.drawChart(1);

    // Animation: har 50ms baad ek naya point add hoga
    this.interval = setInterval(() => {
      if (this.currentIndex < this.dates.length) {
        this.currentIndex++;
        this.drawChart(this.currentIndex);
      } else {
        clearInterval(this.interval);
      }
    }, 100);
  }

  generateData() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // Data from Jan 2000 to May 2005
    for (let year = 2000; year <= 2005; year++) {
      const endMonth = year === 2005 ? 4 : 11;
      for (let month = 0; month <= endMonth; month++) {
        const date = new Date(year, month, 1);
        this.dates.push(date.toISOString().split('T')[0]); // Use ISO date for Plotly
        
        // Sample data mimicking the trend
        const progress = (year - 2000) * 12 + month;
        let goldValue = 0;
        let spValue = 0;
        
        if (progress < 12) { // 2000
            goldValue = -5 + (Math.random() * 5);
            spValue = 10 - progress + (Math.random() * 5);
        } else if (progress < 36) { // 2001-2002
            goldValue = -5 + (progress * 1.5) + (Math.sin(progress) * 5);
            spValue = - (progress * 1.5) + (Math.cos(progress) * 10);
        } else { // 2003 onwards
            goldValue = 20 + ((progress-36) * 1.2) + (Math.sin(progress/2)*3);
            spValue = -40 + ((progress-36) * 1.1) + (Math.cos(progress/2)*5);
        }
        this.gold.push(Math.round(goldValue*10)/10);
        this.sp500.push(Math.round(spValue*10)/10);
      }
    }
  }

  drawChart(points: number) {
    const date = new Date(this.dates[points-1]);
    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const currentDateText = `${monthName} ${year}`;

    // Marker sizes: 0 for all points except the last one
    const markerSizes = new Array(points).fill(0);
    if (points > 0) {
      markerSizes[points - 1] = 6; 
    }

    const trace1 = {
      x: this.dates.slice(0, points),
      y: this.gold.slice(0, points),
      mode: 'lines+markers',
      name: 'Gold',
      line: { color: 'gold' },
      marker: { color: 'gold', size: markerSizes }
    };
    const trace2 = {
      x: this.dates.slice(0, points),
      y: this.sp500.slice(0, points),
      mode: 'lines+markers',
      name: 'S&P 500 (TR)',
      line: { color: 'deepskyblue' },
      marker: { color: 'deepskyblue', size: markerSizes }
    };
    const data = [trace1, trace2];

    const annotations: any[] = [{
        x: 1,
        y: 1.15,
        xref: 'paper',
        yref: 'paper',
        text: currentDateText,
        showarrow: false,
        xanchor: 'right',
        yanchor: 'top',
        font: { size: 20 }
      }, {
        x: 0,
        y: 1.15,
        xref: 'paper',
        yref: 'paper',
        text: 'Total return, %',
        showarrow: false,
        xanchor: 'left',
        yanchor: 'top',
        font: { size: 14, color: 'grey' }
      }];
    
    // Add annotations for line ends after a year of data
    if (points > 12) {
      const lastDate = this.dates[points - 1];
      const lastGoldValue = this.gold[points - 1];
      const lastSp500Value = this.sp500[points - 1];

      annotations.push({
        x: lastDate,
        y: lastGoldValue,
        text: `Gold<br>${lastGoldValue}%`,
        showarrow: false,
        xanchor: 'left',
        yanchor: 'middle',
        font: { color: 'gold', size: 12 },
        xshift: 10
      });

      annotations.push({
        x: lastDate,
        y: lastSp500Value,
        text: `S&P 500 (TR)<br>${lastSp500Value}%`,
        showarrow: false,
        xanchor: 'left',
        yanchor: 'middle',
        font: { color: 'deepskyblue', size: 12 },
        xshift: 10
      });
    }

    const layout = {
      title: { text: 'Gold versus the S&P 500' },
      showlegend: false,
      xaxis: { 
        range: [this.dates[0], '2005-12-31'], // Extend range to end of 2005 for padding
        showgrid: false,
        tickformat: '%Y' // Display only years
      },
      yaxis: { 
        title: { text: 'Total return (%)' },
        range: [-70, 70]
       },
      plot_bgcolor: '#111',
      paper_bgcolor: '#111',
      font: { color: '#fff' },
      annotations: annotations
    };
    Plotly.newPlot(this.plotlyChart.nativeElement, data, layout as any, {responsive: true});
  }
}

