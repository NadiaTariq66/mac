import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CriteriaComponent } from '../../components/criteria/criteria.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-business-cycles-backing-status',
  imports: [RouterLink,CommonModule, FormsModule,CriteriaComponent],
  templateUrl: './business-cycles-backing-status.component.html',
  styleUrl: './business-cycles-backing-status.component.scss'
})
export class BusinessCyclesBackingStatusComponent {
  
  companyCount: number = 0;
  companyCount1: number = 0;
    selectedCompanyType: string[] = [];
    selectedCompanyStatus: string[] = [];
  
  constructor(private apiService: ApiService) {}

  
  onCheckboxChange(event: any, cascade: boolean = false, level: number = 0) {
    const isChecked = event.target.checked;
    const item = event.target.value;
  
    console.log('Checkbox value:', item);
    console.log('Is checked:', isChecked);
  
    


    if (item !== "") {
      // If checked, add to correct array
      if (level === 0) {
        this.selectedCompanyType.push(item);
        // Clear children when parent is touched
        this.selectedCompanyStatus = [];
      

      } else if (level === 1) {
        this.selectedCompanyStatus.push(item);
      }
        

     
    } else {
      // If unchecked, remove from correct array
      if (level === 0) {
        this.selectedCompanyType = this.selectedCompanyType.filter(name => name !== item);
        // Clear children when parent is touched
        this.selectedCompanyStatus = [];
      

      } else if (level === 1) {
        this.selectedCompanyStatus = this.selectedCompanyStatus.filter(name => name !== item);
       

      } 
    }

this.displayCounts(level);

    


  }
data_company: any;
data_status:any;
  displayCounts(level?: number): void {
    let payload: any = {};

    if (this.selectedCompanyType.length > 0 && level === 0) {
      payload.company_type = this.selectedCompanyType;
      this.data_company = payload?.company_type;
    }
    if (this.selectedCompanyStatus.length > 0 && level === 1) {
      payload.company_status = this.selectedCompanyStatus;
      this.data_status = payload?.company_status;
    }
  


    console.log('Final Payload:', payload);
    console.log('Final:');

    // if (Object.keys(payload).length === 0) {
    //   this.companyCount = 0;
    //   payload = {};
    //   alert("Please select at least one checkbox.");
    //   return;
    // }
     
     
    console.log(this.data_company);
   
   this.sendCompanyTypeAndStatusPayloadToBackend(payload,level);
  }
getCompanyList() {
  const company_type_data = this.data_company?.join(', ') || '';
  sessionStorage.setItem('companyType', company_type_data); // Save as string
 //sessionStorage.setItem('industry_Classification', JSON.stringify(this.data_inds));
  return company_type_data;
}
getCompanyStatusList() {
  const company_status_data = this.data_status?.join(', ') || '';
  sessionStorage.setItem('company_status', company_status_data); // Save as string
 //sessionStorage.setItem('industry_Classification', JSON.stringify(this.data_inds));
  return company_status_data;
}
    ngOnInit() {
      const companyType = sessionStorage.getItem('companyType');
      const company_status = sessionStorage.getItem('company_status');
      if (companyType && company_status) {
        this.data_company = companyType.split(', ')
        this.data_status = company_status.split(', ')
      }
      // if (!this.companyType || !this.companyStatus) {
      //   this.companyType = sessionStorage.getItem('companyType') || '';
      //   this.companyStatus = sessionStorage.getItem('company_status') || '';
      // }
    }
  sendCompanyTypeAndStatusPayloadToBackend(payload: any, level?: number | undefined): void {
   

   // const payload = { "gics_sector": ["Health care"] };
    this.apiService.postData(payload).subscribe(res => {
      // console.log('POST result:', res);
     // Assuming the structure is: res.counts[0].count
    const count = res.counts && res.counts.length > 0 ? res.counts[0].count : 0;

    if(level===0){
      this.companyCount = count;
    }else{
      this.companyCount1 = count;
    }


    console.log('business Extracted Count:', count);

      
    });
  }

}
