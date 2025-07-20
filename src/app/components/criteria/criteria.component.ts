import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'criteria',
  imports: [CommonModule],
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.scss'
})
export class CriteriaComponent {
  @Input() industry_Classification: string = '';
  @Input() gicsCount: string = '';
  @Input() geography: string = '';
  @Input() countryCount: string = '';
  @Input() companyType: string = '';
  @Input() companyStatus: string = '';

  ngOnInit() {
    if (!this.industry_Classification || !this.geography) {
      this.industry_Classification = sessionStorage.getItem('industry_Classification') || '';
      this.geography = sessionStorage.getItem('geography') || '';
    }
    if (!this.companyType || !this.companyStatus) {
      this.companyType = sessionStorage.getItem('companyType') || '';
      this.companyStatus = sessionStorage.getItem('company_status') || '';
    }
  }
}
