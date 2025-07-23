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
import { NgbModule, NgbModal, NgbModalRef, NgbCarousel } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { MarkdownModule, MarkdownService } from 'ngx-markdown';


@Component({
  standalone: true,
  selector: 'app-business-info',
  imports: [NgbModule, NgxSliderModule, CommonModule, MarkdownModule],
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
htmlContentLeft: string = '';
htmlContentRight: string = '';
  headings: { id: string, level: number, text: string }[] = [];
  
  // Carousel properties
  carouselSlides: { title: string, content: string, id: string }[] = [];
  currentSlideIndex: number = 0;
  showCarousel: boolean = true; // Default to carousel view

  @ViewChild('contentContainer', { static: false }) contentContainer!: ElementRef;
  @ViewChild('carousel', { static: false }) carousel!: NgbCarousel;

   ngOnInit() {
    this.http
      .get('assets/business_desc.md', { responseType: 'text' })
       .subscribe((data) => {
      this.htmlContent = data;

      const midpoint = Math.floor(data.length / 2);

      // Smart split: avoid cutting mid-word
      const leftEnd = data.indexOf('\n', midpoint);
      this.htmlContentLeft = data.slice(0, leftEnd);
      this.htmlContentRight = data.slice(leftEnd);

      // Create carousel slides from content
      this.createCarouselSlides(data);
    });
  }

  createCarouselSlides(content: string): void {
    // Split content by headings (lines that start with **)
    const sections = content.split(/(?=^\*\*[^*]+\*\*)/m).filter(section => section.trim());
    
    this.carouselSlides = sections.map((section, index) => {
      const lines = section.split('\n');
      const titleLine = lines[0];
      // Extract title from **Title** format
      const titleMatch = titleLine.match(/\*\*([^*]+)\*\*/);
      const title = titleMatch ? titleMatch[1].trim() : titleLine.trim();
      
      // Keep the original markdown format for the content, including the heading
      const content = section.trim();
      
      return {
        title: title || `Section ${index + 1}`,
        content: content,
        id: `slide-${index}`
      };
    });

    // If no sections found, create a single slide
    if (this.carouselSlides.length === 0) {
      this.carouselSlides = [{
        title: 'Business Description',
        content: content,
        id: 'slide-0'
      }];
    }

    this.cdr.detectChanges();
    
    // Extract headings for sidebar
    this.extractCarouselHeadings();
  }

  onMarkdownReady() {
    // Headings are already extracted in createCarouselSlides
    // No need to extract again
  }

  // Extract headings from carousel content
  extractCarouselHeadings(): void {
    if (this.carouselSlides.length > 0) {
      const headings: { id: string; level: number; text: string }[] = [];
      
      this.carouselSlides.forEach((slide, index) => {
        // Add the main slide title only (no duplicate extraction from content)
        headings.push({
          id: slide.id,
          level: 1,
          text: slide.title,
        });
      });

      this.headings = headings;
      if (this.router.url === '/business-info') {
        this.showHeadings = true;
      }

      this.cdr.detectChanges();
    }
  }
  
  toggleHeadings() {
  this.showHeadings = !this.showHeadings;
}

toggleView() {
  this.showCarousel = !this.showCarousel;
}

handleNavAndToggle() {
  if (this.router.url !== '/business-info') {
    this.router.navigate(['/business-info']);
  } else {
    this.toggleHeadings();
  }
}

// Carousel navigation methods
nextSlide() {
  if (this.carousel) {
    this.carousel.next();
  }
}

prevSlide() {
  if (this.carousel) {
    this.carousel.prev();
  }
}

goToSlide(index: number) {
  if (this.carousel) {
    this.carousel.select(`slide-${index}`);
  }
}

onSlideChange(event: any) {
  this.currentSlideIndex = parseInt(event.current.replace('slide-', ''));
}

//  extractHeadings(): void {
//   if (this.contentContainer) {
//     const strongTags = this.contentContainer.nativeElement.querySelectorAll('p > strong') as NodeListOf<HTMLElement>;

//     const headings: { id: string; level: number; text: string }[] = [];
//     Array.from(strongTags).forEach((el: HTMLElement, i) => {
//       const parent = el.parentElement;
//       if (parent && el.textContent?.trim() === parent.textContent?.trim()) {
//         const id = `heading-${i}`;
//         this.renderer.setAttribute(parent, 'id', id);
//         headings.push({
//           id,
//           level: 2,
//           text: el.textContent?.trim() || '',
//         });
//       }
//     });

//     this.headings = headings;
//     if (this.router.url === '/business-info') {
//       this.showHeadings = true;
//     }

//     this.cdr.detectChanges();
//   }
// }

  scrollTo(id: string): void {
    // Check if we're in carousel view
    if (this.showCarousel && this.carouselSlides.length > 0) {
      // Find the slide index by id
      const slideIndex = this.carouselSlides.findIndex(slide => slide.id === id);
      if (slideIndex !== -1 && this.carousel) {
        this.carousel.select(id);
        this.currentSlideIndex = slideIndex;
      }
    } else {
      // Original two-column view logic
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
}