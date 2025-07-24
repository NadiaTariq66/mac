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
  selector: 'app-abbv-sp-500-returns',
  imports: [NgbModule, NgxSliderModule, CommonModule],
  templateUrl: './abbv-sp-500-returns.component.html',
  styleUrl: './abbv-sp-500-returns.component.scss'
})
export class AbbvSP500ReturnsComponent implements OnInit{
  @ViewChild('plotlyChart', { static: true }) plotlyChart!: ElementRef;

  dates: string[] = [];
  abbvReturns: number[] = [];
  spxReturns: number[] = [];

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
    this.http.get('../../../assets/abbv-vs-sp500-returns.xlsx', { responseType: 'arraybuffer' }).subscribe({
      next: (data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Find column indexes for date, ABBV returns, and SPX returns
        const headerRow = jsonData[0] as any[];
        console.log('Raw header row:', headerRow);
        console.log('All data rows:', jsonData.slice(0, 5)); // Show first 5 rows for debugging
        
        // Safe header processing with null checks
        const dateIdx = headerRow.findIndex(h => h && typeof h === 'string' && h.toLowerCase().includes('date'));
        const abbvIdx = headerRow.findIndex(h => h && typeof h === 'string' && h.toLowerCase().includes('abbv'));
        const spxIdx = headerRow.findIndex(h => h && typeof h === 'string' && h.toLowerCase().includes('spx'));
        
        // If date column not found, try alternative names
        let actualDateIdx = dateIdx;
        if (dateIdx === -1) {
          // Try to find date column with different names
          actualDateIdx = headerRow.findIndex(h => h && typeof h === 'string' && 
            (h.toLowerCase().includes('date') || h.toLowerCase().includes('time') || h.toLowerCase().includes('period')));
          
          // If still not found, assume first column is date
          if (actualDateIdx === -1 && headerRow.length > 0) {
            actualDateIdx = 0;
            console.log('Assuming first column is date column');
          }
        }

        console.log('Column indexes:', { dateIdx: actualDateIdx, abbvIdx, spxIdx });
        console.log('Headers:', headerRow);

        // Check if all required columns were found
        if (actualDateIdx === -1 || abbvIdx === -1 || spxIdx === -1) {
          console.error('Required columns not found in Excel file:');
          console.error('Date column found:', actualDateIdx !== -1);
          console.error('ABBV column found:', abbvIdx !== -1);
          console.error('SPX column found:', spxIdx !== -1);
          console.error('Available headers:', headerRow);
          return;
        }

        // Collect monthly returns data
        const monthlyData: { date: string; abbvReturn: number; spxReturn: number }[] = [];

        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i] as any[];
          
          // Check if row exists and has required data
          if (!row || row.length < Math.max(actualDateIdx, abbvIdx, spxIdx) + 1) {
            console.warn(`Skipping row ${i}: insufficient data`);
            continue;
          }
          
          const dateValue = row[actualDateIdx];
          const abbvReturn = row[abbvIdx];
          const spxReturn = row[spxIdx];

          if (dateValue !== null && dateValue !== undefined && 
              abbvReturn !== null && abbvReturn !== undefined && 
              spxReturn !== null && spxReturn !== undefined) {
            // Handle Excel date format
            let plotlyDate: string;
            if (typeof dateValue === 'number') {
              const dateObj = XLSX.SSF.parse_date_code(dateValue);
              plotlyDate = `${dateObj.y}-${String(dateObj.m).padStart(2, '0')}-${String(dateObj.d).padStart(2, '0')}`;
            } else {
              // If it's already a string, parse it
              const date = new Date(dateValue);
              plotlyDate = date.toISOString().split('T')[0];
            }
            
            const abbvValue = Number(abbvReturn);
            const spxValue = Number(spxReturn);
            
            if (!isNaN(abbvValue) && !isNaN(spxValue)) {
              monthlyData.push({ 
                date: plotlyDate, 
                abbvReturn: abbvValue, 
                spxReturn: spxValue 
              });
            }
          }
        }

        // Sort by date and extract arrays
        monthlyData.sort((a, b) => a.date.localeCompare(b.date));
        
        this.dates = monthlyData.map(item => item.date);
        this.abbvReturns = monthlyData.map(item => item.abbvReturn);
        this.spxReturns = monthlyData.map(item => item.spxReturn);

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
    }, 10);
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

    // ABBV line (Gold/Orange)
    const trace1 = {
      x: this.dates.slice(0, points),
      y: this.abbvReturns.slice(0, points),
      mode: 'lines+markers',
      name: 'ABBV',
      line: { color: '#FF8C00', width: 2 }, // Orange line
      marker: { color: '#FF8C00', size: markerSizes }
    };

    // SPX line (Blue)
    const trace2 = {
      x: this.dates.slice(0, points),
      y: this.spxReturns.slice(0, points),
      mode: 'lines+markers',
      name: 'S&P 500 (TR)',
      line: { color: '#1E90FF', width: 2 }, // Blue line
      marker: { color: '#1E90FF', size: markerSizes }
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
      }];
    
    // Add value annotations for both lines
    if (points > 12) {
      const lastDate = this.dates[points - 1];
      const lastAbbvValue = this.abbvReturns[points - 1];
      const lastSpxValue = this.spxReturns[points - 1];
      
      annotations.push({
        x: lastDate,
        y: lastAbbvValue,
        text: `${lastAbbvValue.toFixed(1)}%`,
        showarrow: false,
        xanchor: 'left',
        yanchor: 'middle',
        font: { color: '#FF8C00', size: 12 },
        xshift: 10
      });
      
      annotations.push({
        x: lastDate,
        y: lastSpxValue,
        text: `${lastSpxValue.toFixed(1)}%`,
        showarrow: false,
        xanchor: 'left',
        yanchor: 'middle',
        font: { color: '#1E90FF', size: 12 },
        xshift: 10
      });
    }

    const layout = {
      title: { text: 'Gold versus the S&P 500', font: { size: 24 } },
      xaxis: { 
        title: { text: 'Total return, %' },
        range: [this.dates[0], xAxisEndDate.toISOString().split('T')[0]],
        showgrid: true,
        gridcolor: '#333',
        tickformat: '%Y'
      },
      yaxis: { 
        title: { text: 'Total return, %' },
        showgrid: true,
        gridcolor: '#333'
      },
      plot_bgcolor: '#000',
      paper_bgcolor: '#000',
      font: { color: '#fff' },
      annotations: annotations,
      showlegend: true,
      legend: {
        x: 0.02,
        y: 0.98,
        bgcolor: 'rgba(0,0,0,0.5)',
        bordercolor: '#333',
        borderwidth: 1
      }
    };
    Plotly.newPlot(this.plotlyChart.nativeElement, data, layout as any, {responsive: true});
  }
}

