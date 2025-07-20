import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CriteriaComponent } from '../../components/criteria/criteria.component';

@Component({
  selector: 'app-locations',
  imports: [CommonModule, FormsModule,RouterLink,CriteriaComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
 
  geographyCount: number = 0;
  countryCount: number = 0;

  selectedGeography: string[] = [];
  selectedCompanyName: string[] = [];
  
  constructor(private apiService: ApiService) {}

  sectors: any = [
    {
      name: 'United States and Canada',
      checked: false,
      expanded: true,
      children: [
     
        {
          name: 'United States of America',
          checked: false,
          expanded: false,
          children: [
            {
              name: 'West',
              checked: false,
              expanded: true,
              children: [
                { name: 'Alaska', checked: false },
                { name: 'California', checked: false },
                { name: 'Hawaii', checked: false },
                { name: 'Oregon', checked: false },
                { name: 'Washington', checked: false }
              ]
            },
            {
              name: 'Midwest',
              checked: false,
              expanded: false,
              children: [
                { name: 'Illinois', checked: false },
                { name: 'Indiana', checked: false },
                { name: 'Iowa', checked: false },
                { name: 'Kansas', checked: false },
                { name: 'Michigan', checked: false },
                { name: 'Minnesota', checked: false },
                { name: 'Missouri', checked: false },
                { name: 'Nebraska', checked: false },
                { name: 'North Dakota', checked: false },
                { name: 'Ohio', checked: false },
                { name: 'South Dakota', checked: false },
                { name: 'Wisconsin', checked: false }
              ]
            },
            {
              name: 'South',
              checked: false,
              expanded: false,
              children: [
                { name: 'Alabama', checked: false },
                { name: 'Arkansas', checked: false },
                { name: 'Delaware', checked: false },
                { name: 'Florida', checked: false },
                { name: 'Georgia', checked: false },
                { name: 'Kentucky', checked: false },
                { name: 'Louisiana', checked: false },
                { name: 'Maryland', checked: false },
                { name: 'Mississippi', checked: false },
                { name: 'North Carolina', checked: false },
                { name: 'Oklahoma', checked: false },
                { name: 'South Carolina', checked: false },
                { name: 'Tennessee', checked: false },
                { name: 'Texas', checked: false },
                { name: 'Virginia', checked: false },
                { name: 'West Virginia', checked: false },
                { name: 'Washington, D.C.', checked: false }
              ]
            },
            {
              name: 'Northeast',
              checked: false,
              expanded: false,
              children: [
                { name: 'Connecticut', checked: false },
                { name: 'Maine', checked: false },
                { name: 'Massachusetts', checked: false },
                { name: 'New Hampshire', checked: false },
                { name: 'New Jersey', checked: false },
                { name: 'New York', checked: false },
                { name: 'Pennsylvania', checked: false },
                { name: 'Rhode Island', checked: false },
                { name: 'Vermont', checked: false }
              ]
            }
          ]
        },
        {
          name: 'US Territories and Possessions',
          checked: false,
          expanded: false,
          children: [
            { name: 'American Samoa', checked: false },
            { name: 'Guam', checked: false },
            { name: 'Midway Islands', checked: false },
            { name: 'Northern Mariana Islands', checked: false },
            { name: 'Palau', checked: false },
            { name: 'Puerto Rico', checked: false },
            { name: 'Virgin Islands', checked: false }
          ]
        },
        {
          name: 'Canada',
          checked: false,
          expanded: false,
          children: [
            { name: 'Alberta', checked: false },
            { name: 'British Columbia', checked: false },
            { name: 'Manitoba', checked: false },
            { name: 'New Brunswick', checked: false },
            { name: 'Newfoundland and Labrador', checked: false },
            { name: 'Northwest Territories', checked: false },
            { name: 'Nova Scotia', checked: false },
            { name: 'Nunavut', checked: false },
            { name: 'Ontario', checked: false },
            { name: 'Prince Edward Island', checked: false },
            { name: 'Quebec', checked: false },
            { name: 'Saskatchewan', checked: false },
            { name: 'Yukon Territory', checked: false }
          ]
        }
      ]
    },    
    {
      name: 'Latin America and Caribbean',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Caribbean',
          checked: false,
          expanded: false,
          children: [
            { name: 'Anguilla', checked: false },
            { name: 'Antigua and Barbuda', checked: false },
            { name: 'Aruba', checked: false },
            { name: 'Bahamas, The', checked: false },
            { name: 'Barbados', checked: false },
            { name: 'Bermuda', checked: false },
            { name: 'British Virgin Islands', checked: false },
            { name: 'Cayman Islands', checked: false },
            { name: 'Cuba', checked: false },
            { name: 'Dominica', checked: false },
            { name: 'Dominican Republic', checked: false },
            { name: 'Grenada', checked: false },
            { name: 'Guadeloupe', checked: false },
            { name: 'Haiti', checked: false },
            { name: 'Jamaica', checked: false },
            { name: 'Martinique', checked: false },
            { name: 'Montserrat', checked: false },
            { name: 'Puerto Rico', checked: false },
            { name: 'Saint Barthelemy', checked: false },
            { name: 'Saint Kitts and Nevis', checked: false },
            { name: 'Saint Lucia', checked: false },
            { name: 'Saint Martin', checked: false },
            { name: 'Saint Vincent & The Grenadines', checked: false },
            { name: 'Sint Maarten', checked: false },
            { name: 'Trinidad and Tobago', checked: false },
            { name: 'Turks and Caicos Islands', checked: false },
            { name: 'U.S. Virgin Islands', checked: false }
          ]
        },
        {
          name: 'Central America & Mexico',
          checked: false,
          expanded: false,
          children: [
            { name: 'Belize', checked: false },
            { name: 'Costa Rica', checked: false },
            { name: 'El Salvador', checked: false },
            { name: 'Guatemala', checked: false },
            { name: 'Honduras', checked: false },
            { name: 'Mexico', checked: false },
            { name: 'Nicaragua', checked: false },
            { name: 'Panama', checked: false }
          ]
        },
        {
          name: 'South America',
          checked: false,
          expanded: false,
          children: [
            { name: 'Argentina', checked: false },
            { name: 'Bolivia', checked: false },
            { name: 'Brazil', checked: false },
            { name: 'Chile', checked: false },
            { name: 'Colombia', checked: false },
            { name: 'Ecuador', checked: false },
            { name: 'Falkland Islands', checked: false },
            { name: 'French Guiana', checked: false },
            { name: 'Guyana', checked: false },
            { name: 'Paraguay', checked: false },
            { name: 'Peru', checked: false },
            { name: 'Suriname', checked: false },
            { name: 'Uruguay', checked: false },
            { name: 'Venezuela', checked: false }
          ]
        }
      ]
    },    
    {
      name: 'Europe',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Developed Markets',
          checked: false,
          expanded: false,
          children: [
            { name: 'Andorra', checked: false },
            { name: 'Austria', checked: false },
            { name: 'Belgium', checked: false },
            { name: 'Channel Islands', checked: false },
            { name: 'Denmark', checked: false },
            { name: 'Finland', checked: false },
            { name: 'France', checked: false },
            { name: 'Germany', checked: false },
            { name: 'Gibraltar', checked: false },
            { name: 'Greece', checked: false },
            { name: 'Iceland', checked: false },
            { name: 'Ireland', checked: false },
            { name: 'Isle of Man', checked: false },
            { name: 'Italy', checked: false },
            { name: 'Liechtenstein', checked: false },
            { name: 'Luxembourg', checked: false },
            { name: 'Monaco', checked: false },
            { name: 'Netherlands', checked: false },
            { name: 'Norway', checked: false },
            { name: 'Portugal', checked: false },
            { name: 'San Marino', checked: false },
            { name: 'Spain', checked: false },
            { name: 'Sweden', checked: false },
            { name: 'Switzerland', checked: false },
            { name: 'United Kingdom', checked: false }
          ]
        },
        {
          name: 'Emerging Markets',
          checked: false,
          expanded: false,
          children: [
            { name: 'Albania', checked: false },
            { name: 'Belarus', checked: false },
            { name: 'Bosnia and Herzegovina', checked: false },
            { name: 'Bulgaria', checked: false },
            { name: 'Croatia', checked: false },
            { name: 'Czech Republic', checked: false },
            { name: 'Estonia', checked: false },
            { name: 'Hungary', checked: false },
            { name: 'Kosovo', checked: false },
            { name: 'Latvia', checked: false },
            { name: 'Lithuania', checked: false },
            { name: 'Macedonia', checked: false },
            { name: 'Malta', checked: false },
            { name: 'Moldova', checked: false },
            { name: 'Montenegro', checked: false },
            { name: 'Poland', checked: false },
            { name: 'Romania', checked: false },
            { name: 'Russia', checked: false },
            { name: 'Serbia', checked: false },
            { name: 'Slovakia', checked: false },
            { name: 'Slovenia', checked: false },
            { name: 'Ukraine', checked: false }
          ]
        }
      ]
    },    
    {
      name: 'Asia/Pacific',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Developed Markets',
          checked: false,
          expanded: false,
          children: [
            { name: 'Australia', checked: false },
            { name: 'Hong Kong', checked: false },
            { name: 'Japan', checked: false },
            { name: 'Korea, South', checked: false },
            { name: 'Singapore', checked: false },
            { name: 'Taiwan', checked: false }
          ]
        },
        {
          name: 'Emerging Markets',
          checked: false,
          expanded: false,
          children: [
            {
              name: 'Central Asia',
              checked: false,
              expanded: true,
              children: [
                { name: 'Afghanistan', checked: false },
                { name: 'Armenia', checked: false },
                { name: 'Azerbaijan', checked: false },
                { name: 'Georgia', checked: false },
                { name: 'Iran', checked: false },
                { name: 'Kazakhstan', checked: false },
                { name: 'Kyrgyzstan', checked: false },
                { name: 'Mongolia', checked: false },
                { name: 'Tajikistan', checked: false },
                { name: 'Turkmenistan', checked: false },
                { name: 'Uzbekistan', checked: false }
              ]
            },
            {
              name: 'East Asia',
              checked: false,
              expanded: true,
              children: [
                { name: 'China', checked: false },
                { name: 'Korea, North', checked: false },
                { name: 'Macau', checked: false },
                { name: 'Mongolia', checked: false }
              ]
            },
            {
              name: 'Indian Sub-Continent',
              checked: false,
              expanded: true,
              children: [
                { name: 'Bangladesh', checked: false },
                { name: 'Bhutan', checked: false },
                { name: 'India', checked: false },
                { name: 'Maldives', checked: false },
                { name: 'Nepal', checked: false },
                { name: 'Pakistan', checked: false },
                { name: 'Sri Lanka', checked: false }
              ]
            },
            {
              name: 'Pacific Islands',
              checked: false,
              expanded: true,
              children: [
                { name: 'Fiji', checked: false },
                { name: 'French Polynesia', checked: false },
                { name: 'Kiribati', checked: false },
                { name: 'Micronesia', checked: false },
                { name: 'New Caledonia', checked: false },
                { name: 'Papua New Guinea', checked: false },
                { name: 'Solomon Islands', checked: false },
                { name: 'Tonga', checked: false },
                { name: 'Tuvalu', checked: false },
                { name: 'Vanuatu', checked: false },
                { name: 'Western Samoa', checked: false }
              ]
            },
            {
              name: 'South East Asia',
              checked: false,
              expanded: true,
              children: [
                { name: 'Brunei', checked: false },
                { name: 'Cambodia', checked: false },
                { name: 'East Timor', checked: false },
                { name: 'Indonesia', checked: false },
                { name: 'Laos', checked: false },
                { name: 'Malaysia', checked: false },
                { name: 'Myanmar', checked: false },
                { name: 'Philippines', checked: false },
                { name: 'Thailand', checked: false },
                { name: 'Vietnam', checked: false }
              ]
            }
          ]
        }
      ]
    },        
    {
      name: 'Africa/Middle East',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Middle East',
          checked: false,
          expanded: false,
          children: [
            { name: 'Bahrain', checked: false },
            { name: 'Cyprus', checked: false },
            { name: 'Iraq', checked: false },
            { name: 'Israel', checked: false },
            { name: 'Jordan', checked: false },
            { name: 'Kuwait', checked: false },
            { name: 'Lebanon', checked: false },
            { name: 'Oman', checked: false },
            { name: 'Palestinian Territories', checked: false },
            { name: 'Qatar', checked: false },
            { name: 'Saudi Arabia', checked: false },
            { name: 'Syria', checked: false },
            { name: 'United Arab Emirates', checked: false },
            { name: 'Yemen', checked: false }
          ]
        },
        {
          name: 'North Africa',
          checked: false,
          expanded: false,
          children: [
            { name: 'Algeria', checked: false },
            { name: 'Egypt', checked: false },
            { name: 'Libya', checked: false },
            { name: 'Morocco', checked: false },
            { name: 'Sudan', checked: false },
            { name: 'Tunisia', checked: false },
            { name: 'Western Sahara', checked: false }
          ]
        },
        {
          name: 'Sub-Saharan Africa',
          checked: false,
          expanded: false,
          children: [
            { name: 'Angola', checked: false },
            { name: 'Benin', checked: false },
            { name: 'Botswana', checked: false },
            { name: 'Burkina Faso', checked: false },
            { name: 'Burundi', checked: false },
            { name: 'Cameroon', checked: false },
            { name: 'Cape Verde', checked: false },
            { name: 'Central African Republic', checked: false },
            { name: 'Chad', checked: false },
            { name: 'Comoros', checked: false },
            { name: 'Congo (Brazzaville)', checked: false },
            { name: 'Congo (Kinshasa)', checked: false },
            { name: 'Côte d\'Ivoire', checked: false },
            { name: 'Djibouti', checked: false },
            { name: 'Equatorial Guinea', checked: false },
            { name: 'Eritrea', checked: false },
            { name: 'Eswatini', checked: false },
            { name: 'Ethiopia', checked: false },
            { name: 'Gabon', checked: false },
            { name: 'Gambia', checked: false },
            { name: 'Ghana', checked: false },
            { name: 'Guinea', checked: false },
            { name: 'Guinea-Bissau', checked: false },
            { name: 'Kenya', checked: false },
            { name: 'Lesotho', checked: false },
            { name: 'Liberia', checked: false },
            { name: 'Madagascar', checked: false },
            { name: 'Malawi', checked: false },
            { name: 'Mali', checked: false },
            { name: 'Mauritania', checked: false },
            { name: 'Mauritius', checked: false },
            { name: 'Mozambique', checked: false },
            { name: 'Namibia', checked: false },
            { name: 'Niger', checked: false },
            { name: 'Nigeria', checked: false },
            { name: 'Rwanda', checked: false },
            { name: 'São Tomé and Príncipe', checked: false },
            { name: 'Senegal', checked: false },
            { name: 'Seychelles', checked: false },
            { name: 'Sierra Leone', checked: false },
            { name: 'Somalia', checked: false },
            { name: 'South Africa', checked: false },
            { name: 'South Sudan', checked: false },
            { name: 'Tanzania', checked: false },
            { name: 'Togo', checked: false },
            { name: 'Uganda', checked: false },
            { name: 'Zambia', checked: false },
            { name: 'Zimbabwe', checked: false }
          ]
        }
      ]
    }
    
   
   
    
    
  ];
  
  
sector: any;
combined: any;
data_locations:any;
  // toggleExpand(item: any): void {
  //   item.expanded = !item.expanded;
  // }

  // toggleCheck(item: any, cascade: boolean = false): void {
  //   if (cascade && item.children) {
  //     item.children.forEach((child: any) => {
  //       child.checked = item.checked;
  //       this.toggleCheck(child, true);
  //     });
  //   }
  // }



  toggleExpand(item: any): void {
    item.expanded = !item.expanded;
  }

  toggleCheck1(item: any,isParent = false): void {
    if (item.children) {
      item.children.forEach((child: any) => {
        child.checked = item.checked;
      });
    }
    

    // if (isParent && item.checked) {
    //   item.expanded = true;
    // }
  }

  toggleCheck(item: any, level: number = 0,isParent = false): void {
    if (item.children) {
      item.children.forEach((child: any) => {
        child.checked = item.checked;
        this.toggleCheck1(child,isParent);
      });
    }



    if (item.checked && item.name !== "") {
      // If checked, add to correct array
      if (level === 0) {
        this.selectedGeography.push(item.name);
        // Clear children when parent is touched
        //this.selectedCompanyName = [];
      } 
      else if (level === 1) {
        this.selectedCompanyName.push(item.name);
      }
    } else {
      // If unchecked, remove from correct array
      if (level === 0) {
        this.selectedGeography = this.selectedGeography.filter(name => name !== item.name);
        // Clear children when parent is touched
       // this.selectedCompanyName = [];
      } 
      else if (level === 1) {
        this.selectedCompanyName = this.selectedCompanyName.filter(name => name !== item.name);
      } 
    }
    this.displayCounts(level);
  }

  displayCounts(level: number): void {
    let payload: any = {};

    if (this.selectedGeography.length > 0) {
      payload.geography = this.selectedGeography;
    }
    if (this.selectedCompanyName.length > 0) {
      payload.country_name = this.selectedCompanyName;
    }


    console.log('Locations Final Payload:', payload);
    // console.log('Final:');

    if (Object.keys(payload).length === 0) {
      this.geographyCount = 0;
      this.countryCount = 0;
      payload = {};
      // alert("Please select at least one checkbox.");
      return;
    }
    this.data_locations = payload.geography;
   console.log(this.data_locations);
   
   this.sendGeographyAndCompanyNamePayloadToBackend(payload,level);
  }




  getLocationList() {
    const locations = this.data_locations?.join(', ') || '';
    sessionStorage.setItem('geography', locations); // Save as string
  //sessionStorage.setItem('industry_Classification', JSON.stringify(this.data_inds));
    return locations;
  }
    ngOnInit() {
  const geography = sessionStorage.getItem('geography');
  if (geography) {
    this.data_locations = geography.split(', ')
  }
}
  sendGeographyAndCompanyNamePayloadToBackend(payload: any,level : number): void {
    this.expandAll(this.sectors);

   // const payload = { "gics_sector": ["Health care"] };
    this.apiService.postData(payload).subscribe(res => {
      // console.log('POST result:', res);
     // Assuming the structure is: res.counts[0].count
  const count = res.counts && res.counts.length > 0 ? res.counts[0].count : 0;

  console.log('Locations Extracted Count:', count);

  // You can now store it in a component variable
  if(level === 0){
    this.geographyCount = count;
  }else{
    this.countryCount = count;
  }
  
      
    });
  }





  expandAll(items: any[]): void {
    items.forEach(item => {
      item.expanded = true;
      
      // If the item has children, expand them too
      if (item.children) {
        this.expandAll(item.children);
      }
  
      // If it has `combained`, handle that too
      if (item.combained) {
        this.expandAll(item.combained);
      }
    });
  }
  // ngOnInit(): void {
  // //  this.expandAll(this.sectors);
  //   if (this.geographyCount === 0 && this.selectedGeography.length === 0 && this.selectedCompanyName.length === 0) {
  //     // Only fetch if data is not already present
  //     this.displayCounts();
  //   } else {
  //     console.log('Using existing data:', this.geographyCount, this.selectedGeography, this.selectedCompanyName);
  //   }
  // }
  
}
