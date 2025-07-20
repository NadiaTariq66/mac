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
  years = ['2000', '2001', '2002', '2003', '2004'];
  gold = [0, 5, 15, 30, 49.1];
  sp500 = [0, -5, -15, -30, -16.5];

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
    this.drawChart(1);

    // Animation: har 1 second baad ek naya point add hoga
    this.interval = setInterval(() => {
      if (this.currentIndex < this.years.length) {
        this.currentIndex++;
        this.drawChart(this.currentIndex);
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }
  drawChart(points: number) {
    const trace1 = {
      x: this.years.slice(0, points),
      y: this.gold.slice(0, points),
      mode: 'lines+markers',
      name: 'Gold',
      line: { color: 'gold' }
    };
    const trace2 = {
      x: this.years.slice(0, points),
      y: this.sp500.slice(0, points),
      mode: 'lines+markers',
      name: 'S&P 500 (TR)',
      line: { color: 'deepskyblue' }
    };
    const data = [trace1, trace2];
    const layout = {
      title: { text: 'Total return, %' },
      xaxis: { title: { text: 'Year' } },
      yaxis: { title: { text: 'Total return (%)' } },
      plot_bgcolor: '#111',
      paper_bgcolor: '#111',
      font: { color: '#fff' }
    };
    Plotly.newPlot(this.plotlyChart.nativeElement, data, layout, {responsive: true});
  }
}

