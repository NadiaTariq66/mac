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

// PlotlyModule.plotlyjs = PlotlyJS


@Component({
  standalone: true,
  selector: 'app-stock-price-and-date',
  imports: [NgbModule, NgxSliderModule, CommonModule],
  templateUrl: './stock-price-and-date.component.html',
  styleUrl: './stock-price-and-date.component.scss'
})
export class StockPriceAndDateComponent implements OnInit{
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
  }


 
}
