import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CriteriaComponent } from "../../components/criteria/criteria.component";
import { SectorsIndustriesComponent } from "../sectors-industries/sectors-industries.component";
import { BusinessDescriptionComponent } from "../business-description/business-description.component";
import { SelectionPayload } from "../../components/nested-checkboxes/nested-checkboxes.component";
import { BusinessCyclesBackingStatusComponent } from "../business-cycles-backing-status/business-cycles-backing-status.component";
import { FinancialMetricsComponent } from "../financial-metrics/financial-metrics.component";
import { LocationsComponent } from "../locations/locations.component";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../services/api.service";
export interface CheckboxNode {
  name: string;
  checked?: boolean;
  indeterminate?: boolean;
  children?: CheckboxNode[];
  expanded?: boolean;
  type?: string;
  keyValue?: string;
}

interface Parameter {
  type: string;
  label: string;
  values: string[];
}

interface CategoryItem {
  id: string;
  name: string;
  level: number;
  parentFilter?: string;
  children: CategoryItem[];
  parameters?: string[];
  yearType?: string[];
  fiscalYear?: string[];
  fiscalQuarter?: string[];
  expanded?: boolean;
}

interface SelectedCriteria {
  id: string;
  name: string;
  parameters: { [key: string]: any };
}
@Component({
  selector: "app-screening",
  imports: [
    RouterLink,
    CriteriaComponent,
    SectorsIndustriesComponent,
    BusinessDescriptionComponent,
    BusinessCyclesBackingStatusComponent,
    FinancialMetricsComponent,
    LocationsComponent,
    CommonModule,
  ],
  templateUrl: "./screening.component.html",
  standalone: true,
  styleUrl: "./screening.component.scss",
})
export class ScreeningComponent {
  http = inject(HttpClient);
  apiService = inject(ApiService);
  isCriteriaFilterSelected: boolean = false;
  selectedCompanyType!: any;
  selectedCompanyStatus!: any;
  selectedCriteriaFilter:
    | undefined
    | "sector-and-industries"
    | "business-description"
    | "locations"
    | "company-type-and-company-status"
    | "deals-and-investors"
    | "financial-metrics"
    | "intellectual-property";
  sectorSelection: {
    GICS_SECTOR?: string[];
    GICS_GROUP?: string[];
    GICS_PRIMARY_INDUSTRY?: string[];
  } = {};
  locationSelection: any[] = [];
  minimalSectorSelection!: string[];
  minimalLocationSelection!: string[];
  categoryData: CategoryItem[] = [];
  selectedCriteria: CategoryItem | null = null;
  selectedParameters: { [key: string]: any } = {};

  sectorData: CheckboxNode[] = [
    {
      name: "Health Care",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Health Care Equipment and Services",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Health Care Equipment and Supplies",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Health Care Providers and Services",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Health Care Technology",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
          ],
        },
        {
          name: "Pharmaceuticals, Biotechnology and Life Sciences",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Biotechnology",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Pharmaceuticals",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Life Sciences Tools and Services",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
          ],
        },
      ],
    },

    {
      name: "Consumer Discretionary",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Automobiles and Components",
          checked: false,
          type: "GICS_GROUP",
          expanded: true,
          children: [
            {
              name: "Automobile Components",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Automobiles",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
          ],
        },
        {
          name: "Consumer Durables and Apparel",
          checked: false,
          type: "GICS_GROUP",
          expanded: true,
          children: [
            {
              name: "Household Durables",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Leisure Products",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Textiles, Apparel and Luxury Goods",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
          ],
        },
        {
          name: "Consumer Services",
          checked: false,
          type: "GICS_GROUP",
          expanded: true,
          children: [
            {
              name: "Hotels, Restaurants and Leisure",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Diversified Consumer Services",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
          ],
        },
        {
          name: "Consumer Discretionary Distribution and Retail",
          checked: false,
          type: "GICS_GROUP",
          expanded: true,
          children: [
            {
              name: "Broadline Retail",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Specialty Retail",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
          ],
        },
      ],
    },
    {
      name: "Consumer Staples",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Consumer Staples Distribution and Retail",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Consumer Staples Distribution and Retail",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
          ],
        },
        {
          name: "Food, Beverage and Tobacco",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Beverages",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Food Products",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            { name: "Tobacco", type: "GICS_PRIMARY_INDUSTRY", checked: false },
          ],
        },
        {
          name: "Household and Personal Products",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Household Products",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Personal Care Products",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      name: "Information Technology",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Software and Services",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "IT Services",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            { name: "Software", type: "GICS_PRIMARY_INDUSTRY", checked: false },
          ],
        },
        {
          name: "Technology Hardware and Equipment",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            { name: "Communications Equipment", checked: false },
            {
              name: "Technology Hardware, Storage and Peripherals",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
            {
              name: "Electronic Equipment, Instruments and Components",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
          ],
        },
        {
          name: "Semiconductors and Semiconductor Equipment",
          type: "GICS_GROUP",
          checked: false,
        },
      ],
    },

    {
      name: "Industrials",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Capital Goods",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Aerospace and Defense",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Building Products",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Construction and Engineering",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Electrical Equipment",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Industrial Conglomerates",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Machinery",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Trading Companies and Distributors",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
          ],
        },
        {
          name: "Commercial and Professional Services",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Commercial Services and Supplies",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Professional Services",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
          ],
        },
        {
          name: "Transportation",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Air Freight and Logistics",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Passenger Airlines",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Marine Transportation",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Ground Transportation",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Transportation Infrastructure",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      name: "Real Estate",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Equity Real Estate Investment Trusts (REITs)",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Diversified REITs",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Health Care REITs",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Hotel and Resort REITs",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Industrial REITs",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Office REITs",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Residential REITs",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Retail REITs",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Specialized REITs",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
          ],
        },
        {
          name: "Real Estate Management and Development",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Real Estate Management and Development",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      name: "Financials",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Banks",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            { name: "Banks", type: "GICS_PRIMARY_INDUSTRY", checked: false },
          ],
        },
        {
          name: "Financial Services",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Consumer Finance",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Capital Markets",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Mortgage Real Estate Investment Trusts (REITs)",
              checked: false,
              type: "GICS_PRIMARY_INDUSTRY",
            },
          ],
        },
        {
          name: "Insurance",
          type: "GICS_GROUP",
          checked: false,
        },
      ],
    },

    {
      name: "Utilities",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        { name: "Electric Utilities", type: "GICS_GROUP", checked: false },
        { name: "Gas Utilities", type: "GICS_GROUP", checked: false },
        { name: "Multi-Utilities", type: "GICS_GROUP", checked: false },
        { name: "Water Utilities", type: "GICS_GROUP", checked: false },
        {
          name: "Independent Power and Renewable Electricity Producers",
          checked: false,
          type: "GICS_GROUP",
        },
      ],
    },

    {
      name: "Energy",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Energy Equipment and Services",
          checked: false,
          type: "GICS_GROUP",
        },
        {
          name: "Oil, Gas and Consumable Fuels",
          type: "GICS_GROUP",
          checked: false,
        },
      ],
    },
    {
      name: "Materials",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Chemicals",
          checked: false,
          type: "GICS_GROUP",
        },
        {
          name: "Construction Materials",
          checked: false,
          type: "GICS_GROUP",
        },
        {
          name: "Containers and Packaging",
          checked: false,
          type: "GICS_GROUP",
        },
        {
          name: "Metals and Mining",
          checked: false,
          type: "GICS_GROUP",
        },
        {
          name: "Paper and Forest Products",
          checked: false,
          type: "GICS_GROUP",
        },
      ],
    },

    {
      name: "Communication Services",
      checked: false,
      expanded: true,
      type: "GICS_SECTOR",
      children: [
        {
          name: "Telecommunication Services",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            {
              name: "Diversified Telecommunication Services",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Wireless Telecommunication Services",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
          ],
        },
        {
          name: "Media and Entertainment",
          checked: false,
          expanded: true,
          type: "GICS_GROUP",
          children: [
            { name: "Media", type: "GICS_PRIMARY_INDUSTRY", checked: false },
            {
              name: "Entertainment",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
            {
              name: "Interactive Media and Services",
              type: "GICS_PRIMARY_INDUSTRY",
              checked: false,
            },
          ],
        },
      ],
    },
  ];
  selectedFinancialMetrics: any = {};

  //checkbox data clear
  clearSectorCheckboxSelection: boolean = false;
  clearLocationCheckboxSelection: boolean = false;
  clearCompanySelection: boolean = false;

  ngOnInit() {
    this.fetchCategoryData();
  }

  selectedOperator: string = "";
  selectedValue: number | null = null;
  selectedYearType: string = "";
  selectedPeriod: string = "";
  addedCriteria: any[] = [];
  // Operator mapping
  operatorMap: { [key: string]: string } = {
    "Equal (=)": "eq",
    "Does Not Equal (<>)": "ne",
    "Less Than (<)": "lt",
    "Greater Than (>)": "gt",
    "Greater Than or Equal (>=)": "gte",
    "Less Than or Equal (<=)": "lte",
    "Plus (+)": "plus",
    "Minus (-)": "minus",
    "Times (*)": "times",
    "Divided By (/)": "div",
    Between: "between",
    "Is NA": "isna",
    "Is Not NA": "isnotna",
  };

  fetchCategoryData() {
    this.http.get<any>("/json-data/category-fields-updated.json").subscribe({
      next: (data) => {
        this.categoryData = Array.isArray(data) ? data : [data];
      },
      error: (err) => {
        console.error("Error fetching category data:", err);
      },
    });
  }
  onScreeningSelection(payload: SelectionPayload) {
    this.sectorSelection = payload.grouped;
    this.minimalSectorSelection = payload.minimal;
  }
  onCompanyType(payload: { COMPANY_TYPE: string[] }) {
    console.log("COMPANY_TYPE obj:", payload);
    this.selectedCompanyType = payload;
  }

  onCompanyStatus(payload: { COMPANY_STATUS: string[] }) {
    console.log("COMPANY_STATUS obj:", payload);
    this.selectedCompanyStatus = payload;
  }
  onMetricsApplied(payload: any) {
    console.log("Received metrics payload from child:", payload);
    this.selectedFinancialMetrics = payload;
  }

  onClearSelection(type: string) {
    if (type === "Industry Classification") {
      this.sectorSelection = {};
      this.minimalSectorSelection = [];

      this.clearSectorCheckboxSelection = true;
    } else if (type === "Company Type") {
      this.selectedCompanyType = {};
      this.selectedCompanyStatus = {};
      this.clearCompanySelection = true;
    } else if (type === "Financial Metrics") {
      this.selectedFinancialMetrics = {};
    } else if (type === "Location") {
      (this.minimalLocationSelection = []), (this.locationSelection = []);

      this.clearLocationCheckboxSelection = true;
    }
  }

  onLocationSelectionChange(payload: any) {
    console.log(payload);
    this.minimalLocationSelection = payload.minimal;
    //this.locationSelection = payload.grouped.GICS_PRIMARY_INDUSTRY; //can be changed in future.
    this.locationSelection = payload;
    console.log(this.locationSelection);
  }
  constructor() {}

  showCriteriaSelector(type: string) {
    if (type == "Industry Classification") {
      this.selectedCriteriaFilter = "sector-and-industries";
    } else if (type == "Location") {
      this.selectedCriteriaFilter = "locations";
    }
  }

  toggleExpand(item: CategoryItem): void {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    }
  }

  selectCriteria(item: CategoryItem): void {
    // Only select items that have no children (leaf nodes)
    if (!item.children || item.children.length === 0) {
      this.selectedCriteria = item;
      this.resetSelections();
    }
  }

  resetSelections(): void {
    this.selectedOperator = "";
    this.selectedValue = null;
    this.selectedYearType = "";
    this.selectedPeriod = "";
  }

  isSelected(item: CategoryItem): boolean {
    return this.selectedCriteria?.id === item.id;
  }

  onOperatorChange(operator: string): void {
    this.selectedOperator = operator;
  }

  onValueChange(value: number): void {
    this.selectedValue = value;
  }

  onYearTypeChange(yearType: string): void {
    this.selectedYearType = yearType;
    this.selectedPeriod = ""; // Reset period when year type changes
  }

  onPeriodChange(period: string): void {
    this.selectedPeriod = period;
  }

  getAvailablePeriods(): string[] {
    if (!this.selectedCriteria || !this.selectedYearType) {
      return [];
    }

    if (this.selectedYearType === "Fiscal Year") {
      return this.selectedCriteria.fiscalYear || [];
    } else if (this.selectedYearType === "Fiscal Quarter") {
      return this.selectedCriteria.fiscalQuarter || [];
    }

    return [];
  }

  newCriteriaToAdd: any;
  addCriteria(): void {
    if (
      this.selectedCriteria &&
      this.selectedOperator &&
      this.selectedValue !== null &&
      this.selectedPeriod
    ) {
      const parentFilter = this.getParentFilter(this.selectedCriteria);
      const operatorKey = this.operatorMap[this.selectedOperator];
      const camelCaseKey = this.toCamelCase(this.selectedCriteria.name);

      const criteriaObject = {
        year: this.selectedPeriod,
        [parentFilter]: {
          [camelCaseKey]: {
            [operatorKey]: Number(this.selectedValue),
          },
        },
      };
      this.newCriteriaToAdd = criteriaObject;
      this.addedCriteria.push(criteriaObject);
      console.log("Added criteria:", criteriaObject);
      console.log("All criteria:", this.addedCriteria);

      // Reset selections
      this.selectedCriteria = null;
      this.resetSelections();
    }
  }

  getParentFilter(item: CategoryItem): string {
    // If the item has parentFilter, use it
    if (item.parentFilter) {
      return item.parentFilter;
    }

    // Otherwise, try to find it in the parent hierarchy
    return this.findParentFilter(this.categoryData, item.id) || "defaultFilter";
  }

  findParentFilter(
    items: CategoryItem[],
    targetId: string,
    currentParentFilter?: string
  ): string | null {
    for (const item of items) {
      if (item.id === targetId) {
        return currentParentFilter || item.parentFilter || null;
      }

      if (item.children && item.children.length > 0) {
        const found = this.findParentFilter(
          item.children,
          targetId,
          item.parentFilter || currentParentFilter
        );
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  removeCriteria(index: number): void {
    this.addedCriteria.splice(index, 1);
  }

  hasChildren(item: CategoryItem): boolean {
    return item.children && item.children.length > 0;
  }

  isLeafNode(item: CategoryItem): boolean {
    return !item.children || item.children.length === 0;
  }

  isValidToAdd(): boolean {
    return !!(
      this.selectedCriteria &&
      this.selectedOperator &&
      this.selectedValue !== null &&
      this.selectedPeriod
    );
  }

  toCamelCase(str: string): string {
    return str
      .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters
      .replace(/\s+/g, " ") // Replace multiple spaces with single space
      .trim()
      .split(" ")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }

  isValidForParameterSelection(): boolean {
    return !!(
      this.selectedCriteria &&
      this.selectedOperator &&
      this.selectedValue !== null
    );
  }
  clearSelections(): void {
    this.selectedCriteria = null;
    this.resetSelections();
  }

  // Method to clear all added criteria
  clearAllCriteria(): void {
    this.addedCriteria = [];
  }

  // Method to export selected criteria as JSON
  exportCriteria(): string {
    return JSON.stringify(this.addedCriteria, null, 2);
  }

  // Method to reset expansion state
  collapseAll(items: CategoryItem[]): void {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children && item.children.length > 0) {
        this.collapseAll(item.children);
      }
    });
  }

  // Method to expand all items
  expandAll(items: CategoryItem[]): void {
    items.forEach((item) => {
      if (item.children && item.children.length > 0) {
        item.expanded = true;
        this.expandAll(item.children);
      }
    });
  }
  companiesClusterData: any[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  totalElements: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [10, 20, 30];
  // Dynamic columns
  selectedTableCriteria: string[] = [];
  onRunScreenGetCompaniesClusterData($event: any) {
    this.companiesClusterData = $event;
    this.totalElements = $event.totalElements;
    this.totalPages = $event.totalPages;
    console.log(this, this.companiesClusterData);
    // Determine selected criteria for dynamic columns
    this.updateSelectedCriteria();
  }
  private updateSelectedCriteria() {
    this.selectedTableCriteria = [];

    if (
      this.sectorSelection.GICS_PRIMARY_INDUSTRY &&
      this.sectorSelection.GICS_PRIMARY_INDUSTRY.length > 0
    ) {
      this.selectedTableCriteria.push("sector");
    }

    if (this.minimalLocationSelection.length > 0) {
      this.selectedTableCriteria.push("geography");
      this.selectedTableCriteria.push("state");
    }
    console.log(this.selectedTableCriteria);
  }
  private buildPayload() {
    const payload: any = {};

    if (this.locationSelection.length > 0) {
      payload.GEOGRAPHY = this.locationSelection;
    }

    if (
      this.sectorSelection.GICS_PRIMARY_INDUSTRY &&
      this.sectorSelection.GICS_PRIMARY_INDUSTRY.length > 0
    ) {
      payload.GICS_PRIMARY_INDUSTRY =
        this.sectorSelection.GICS_PRIMARY_INDUSTRY;
    }

    return payload;
  }
  loadCompaniesData() {
    const payload = this.buildPayload();
    console.log(payload);

    this.apiService
      .getCompanyCluster(payload, this.currentPage, this.pageSize)
      .subscribe({
        next: (response) => {
          this.companiesClusterData = response.data.content;
          this.totalElements = response.data.totalElements;
          this.totalPages = response.data.totalPages;
        },
        error: (error) => {
          console.error("Error loading companies data:", error);
          this.companiesClusterData = [];
        },
      });
  }
  // Helper methods for template
  getStartRecord(): number {
    if (this.totalElements === 0) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  getEndRecord(): number {
    if (this.totalElements === 0) return 0;
    return Math.min(this.currentPage * this.pageSize, this.totalElements);
  }
  // Pagination methods
  onPageSizeChange(event: any) {
    const newPageSize = +event.target.value;
    this.pageSize = newPageSize;
    this.currentPage = 1;
    this.loadCompaniesData();
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCompaniesData();
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCompaniesData();
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCompaniesData();
    }
  }

  // Helper methods for template
  shouldShowColumn(column: string): boolean {
    if (column === "companyName") return true; // Always show company name
    return this.selectedTableCriteria.includes(column);
  }

  getDisplayValue(company: any, field: string): string {
    switch (field) {
      case "sector":
        return company.sector || "";
      case "geography":
        return company.geography || "";
      case "primaryIndustry":
        return company.primaryIndustry || "";
      case "state":
        return company.state || "";
      default:
        return company[field] || "";
    }
  }

  // Generate page numbers for pagination display
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const start = Math.max(0, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  //FUNCTIONALITY to open criteria from selection
  onDropdownCriteriaChange(criteria: CategoryItem) {
    console.log(criteria);

    // Show the category template first
    this.showCategoryTemplate();

    // Then traverse and highlight the criteria
    setTimeout(() => {
      this.traverseAndHighlightCriteria(criteria);
    }, 100); // Small delay to ensure DOM is updated
  }
  @ViewChild("selectCriteriaSection")
  selectCriteriaSection!: ElementRef<HTMLDivElement>;
  showCategoryTemplate(): void {
    // Hide the category template
    this.selectCriteriaSection.nativeElement.style.display = "block";
    // const categoryTemplate = document.querySelector(".select-criteria-box");
    // if (categoryTemplate) {
    //   (categoryTemplate as HTMLElement).style.display = "block";
    // }
  }

  traverseAndHighlightCriteria(targetCriteria: CategoryItem): void {
    // First, find the path to the target criteria
    const pathToTarget = this.findPathToCriteria(
      this.categoryData,
      targetCriteria.id
    );

    if (pathToTarget && pathToTarget.length > 0) {
      // Expand all parent nodes in the path
      this.expandPathToTarget(pathToTarget);

      // Wait for DOM updates, then highlight the target
      setTimeout(() => {
        this.highlightTargetCriteria(targetCriteria.id);
        this.selectCriteria(targetCriteria);
      }, 200);
    }
  }
  findPathToCriteria(
    items: CategoryItem[],
    targetId: string,
    currentPath: CategoryItem[] = []
  ): CategoryItem[] | null {
    for (const item of items) {
      const newPath = [...currentPath, item];

      // If this is the target item, return the path
      if (item.id === targetId) {
        return newPath;
      }

      // If item has children, search recursively
      if (item.children && item.children.length > 0) {
        const foundPath = this.findPathToCriteria(
          item.children,
          targetId,
          newPath
        );
        if (foundPath) {
          return foundPath;
        }
      }
    }

    return null;
  }
  expandPathToTarget(pathToTarget: CategoryItem[]): void {
    // Expand all items in the path except the last one (which is the target leaf node)
    for (let i = 0; i < pathToTarget.length - 1; i++) {
      const item = pathToTarget[i];
      if (item.children && item.children.length > 0) {
        item.expanded = true;
      }
    }
  }
  highlightTargetCriteria(targetId: string): void {
    // Remove any existing highlights
    this.removeExistingHighlights();

    // Find and highlight the target element
    const targetElement = document.querySelector(
      `[data-criteria-id="${targetId}"]`
    );
    if (targetElement) {
      targetElement.classList.add("highlighted-from-dropdown");

      // Scroll into view
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });

      // Optional: Remove highlight after a few seconds
      setTimeout(() => {
        targetElement.classList.remove("highlighted-from-dropdown");
      }, 3000);
    }
  }
  removeExistingHighlights(): void {
    const highlightedElements = document.querySelectorAll(
      ".highlighted-from-dropdown"
    );
    highlightedElements.forEach((element) => {
      element.classList.remove("highlighted-from-dropdown");
    });
  }

  // Enhanced selectCriteria method to work with dropdown selection
  selectCriteriaFromDropdown(item: CategoryItem): void {
    // Only select items that have no children (leaf nodes)
    if (!item.children || item.children.length === 0) {
      this.selectedCriteria = item;
      this.resetSelections();

      // Also highlight it visually
      setTimeout(() => {
        this.highlightTargetCriteria(item.id);
      }, 100);
    }
  }

  // Method to collapse all and then expand specific path
  collapseAllAndExpandPath(targetCriteria: CategoryItem): void {
    // First collapse all
    this.collapseAll(this.categoryData);

    // Then expand path to target
    setTimeout(() => {
      this.traverseAndHighlightCriteria(targetCriteria);
    }, 100);
  }
}
