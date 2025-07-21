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
import { MarkdownModule, MarkdownService } from 'ngx-markdown';


@Component({
  standalone: true,
  selector: 'app-business-info',
  imports: [NgbModule, NgxSliderModule, CommonModule,MarkdownModule],
    templateUrl: './business-info.component.html',
  styleUrl: './business-info.component.scss'
})
export class BusinessInfoComponent implements OnInit{
  constructor(
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal,
    private markdownService: MarkdownService
  ) { }
  value: number = 2017
  highValue: number = 2024
  options: Options = {
    floor: 1995,
    ceil: 2024,
    step: 1,
    showTicks: true,
    showTicksValues: true,
    tickStep: 1,
    ticksArray: Array.from({ length: 2025 - 1995 + 1 }, (_, i) => 1995 + i),
    translate: (value: number, label: LabelType): string => {
      if (label === LabelType.Low || label === LabelType.High) {
        return `'${value.toString()}`
      }
      return ''
    },
    animate: true,
    ticksTooltip: (val: number): string => `Year: ${val}`
  }
  

  getRouterURL() {
    return this.router.url
  }
  navigate(url: string) {
    this.router.navigate([url])
  }

  financials: any = []
  htmlContent: string = '';

  async ngOnInit() {
    this.http.get('assets/business_desc.md', { responseType: 'text' })
      .subscribe(async data => {
        this.htmlContent = await this.markdownService.parse(data);
      });
  }
 
}
