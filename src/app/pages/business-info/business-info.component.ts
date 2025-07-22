import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { LabelType, Options } from '@angular-slider/ngx-slider'
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
  ChangeDetectorRef,
  Renderer2
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
    private markdownService: MarkdownService,
   private renderer: Renderer2,
  private cdr: ChangeDetectorRef,
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
showHeadings: boolean = false;
  financials: any = []
  htmlContent: string = '';
  headings: { id: string, level: number, text: string }[] = [];

  @ViewChild('contentContainer', { static: false }) contentContainer!: ElementRef;

   ngOnInit() {
    this.http
      .get('assets/business_desc.md', { responseType: 'text' })
      .subscribe( (data) => {
        this.htmlContent = data;
        // extractHeadings will be called by (ready) event in HTML
      });
  }

  onMarkdownReady() {
    setTimeout(() => this.extractHeadings(), 0); // Ensure DOM is rendered
  }
  toggleHeadings() {
  this.showHeadings = !this.showHeadings;
}
handleNavAndToggle() {
  if (this.router.url !== '/business-info') {
    this.router.navigate(['/business-info']);
  } else {
    this.toggleHeadings();
  }
}

 extractHeadings(): void {
  if (this.contentContainer) {
    const strongTags = this.contentContainer.nativeElement.querySelectorAll('p > strong') as NodeListOf<HTMLElement>;

    const headings: { id: string; level: number; text: string }[] = [];
    Array.from(strongTags).forEach((el: HTMLElement, i) => {
      const parent = el.parentElement;
      if (parent && el.textContent?.trim() === parent.textContent?.trim()) {
        const id = `heading-${i}`;
        this.renderer.setAttribute(parent, 'id', id);
        headings.push({
          id,
          level: 2,
          text: el.textContent?.trim() || '',
        });
      }
    });

    this.headings = headings;

    // ✅ Automatically open headings if already on /business-info
    if (this.router.url === '/business-info') {
      this.showHeadings = true;
    }

    this.cdr.detectChanges();
  }
}

  scrollTo(id: string): void {
    const container = this.contentContainer.nativeElement;

  // Temporarily disable columns
  container.style.columnCount = '1';

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    element.classList.add('highlight');

    setTimeout(() => {
      element.classList.remove('highlight');
      container.style.columnCount = '2'; // Restore after scroll
    }, 1500);
  }
  }
}