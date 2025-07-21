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
import * as XLSX from 'xlsx';

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
  price: number[] = [];

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
    this.fetchExcelData();
  }

  fetchExcelData() {
    this.http.get('../../../assets/ABBV_stock_data.xlsx', { responseType: 'arraybuffer' }).subscribe({
      next: (data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Find column indexes for 'date' and 'Adj Close'
        const headerRow = jsonData[0] as string[];
        const dateIdx = headerRow.findIndex(h => h.toLowerCase().includes('date'));
        const adjCloseIdx = headerRow.findIndex(h => h.toLowerCase().includes('adj close'));

        this.dates = [];
        this.price = []; // ya sp500, jo bhi aapko plot karna hai

        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i] as any[];
          const excelDate = row[dateIdx];
          const adjClose = row[adjCloseIdx];

          if (excelDate && adjClose) {
            // Excel dates can be numbers, so we handle that case.
            const dateObj = XLSX.SSF.parse_date_code(excelDate);
            const plotlyDate = `${dateObj.y}-${String(dateObj.m).padStart(2, '0')}-${String(dateObj.d).padStart(2, '0')}`;
            
            const value = Number(adjClose);
            if (!isNaN(value)) {
              this.dates.push(plotlyDate);
              this.price.push(value);
            }
          }
        }

        if(this.dates.length > 0) {
          this.currentIndex = 1;
          this.drawChart(1);
          this.startAnimation();
        } else {
          console.error("No data was extracted from the Excel file. Check column names and data format.");
        }
      },
      error: (error) => {
        console.error("Error fetching the Excel file. Make sure the file is in 'src/assets/data.xlsx' and the path is correct.", error);
      }
    });
  }
  

  startAnimation() {
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.currentIndex < this.dates.length) {
        this.currentIndex++;
        this.drawChart(this.currentIndex);
      } else {
        clearInterval(this.interval);
      }
    }, 100);
  }

  drawChart(points: number) {
    const date = new Date(this.dates[points-1]);
    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const currentDateText = `${monthName} ${year}`;

    // Dynamically calculate the end of the x-axis range for padding
    const lastVisibleDate = new Date(this.dates[points - 1]);
    const xAxisEndDate = new Date(lastVisibleDate);
    // Add 6 months padding to the end of the x-axis
    xAxisEndDate.setMonth(xAxisEndDate.getMonth() + 6);

    // Marker sizes: 0 for all points except the last one
    const markerSizes = new Array(points).fill(0);
    if (points > 0) {
      markerSizes[points - 1] = 6; 
    }

    const trace1 = {
      x: this.dates.slice(0, points),
      y: this.price.slice(0, points),
      mode: 'lines+markers',
      name: 'Adj Close',
      line: { color: 'orange' },
      marker: { color: 'orange', size: markerSizes }
    };
    // Remove trace2 and only use trace1
    const data = [trace1];

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
        text: 'Price',
        showarrow: false,
        xanchor: 'left',
        yanchor: 'top',
        font: { size: 14, color: 'grey' }
      }];
    
    // Remove S&P 500 annotation logic as well
    if (points > 12) {
      const lastDate = this.dates[points - 1];
      const lastPriceValue = this.price[points - 1];
      annotations.push({
        x: lastDate,
        y: lastPriceValue,
        text: `Price<br>${lastPriceValue.toFixed(2)}`, // Round to 2 decimal places
        showarrow: false,
        xanchor: 'left',
        yanchor: 'middle',
        font: { color: 'orange', size: 12 },
        xshift: 10
      });
    }

    const layout = {
      title: { text: 'Stock Price' },
      showlegend: false,
      xaxis: { 
        range: [this.dates[0], xAxisEndDate.toISOString().split('T')[0]], // Dynamic range with padding
        showgrid: false,
        tickformat: '%Y' // Display only years
      },
      yaxis: { 
        title: { text: 'Price' }
        
       },
      plot_bgcolor: '#111',
      paper_bgcolor: '#111',
      font: { color: '#fff' },
      annotations: annotations
    };
    Plotly.newPlot(this.plotlyChart.nativeElement, data, layout as any, {responsive: true});
  }
}

