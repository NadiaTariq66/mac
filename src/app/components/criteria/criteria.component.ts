import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
  ChangeDetectorRef,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Subject, debounceTime } from "rxjs";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { CountUpModule } from "ngx-countup";

@Component({
  selector: "criteria",
  standalone: true,
  imports: [CommonModule, FormsModule, CountUpModule],
  templateUrl: "./criteria.component.html",
  styleUrl: "./criteria.component.scss",
})
export class CriteriaComponent implements OnChanges, OnInit {
  isCriteriaExpanded: boolean = true;
  _apiService = inject(ApiService);
  http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  @Output() clearSelection = new EventEmitter<string>();
  @Output() openCriteriaSelector = new EventEmitter<string>();
  @Output() companiesClusterData = new EventEmitter<any[]>();
  @Input() selectedSector!: {
    GICS_PRIMARY_INDUSTRY?: string[];
  };
  @Output() changedDropdownCriteria = new EventEmitter<any>();

  @Input() selectedLocation!: any;
  @Input() minimalSelectedLocation!: string[];
  @Input() minimalSelectedSector!: string[];
  @Input() selectedCompanyType!: { COMPANY_TYPE: string[] };
  @Input() selectedCompanyStatus!: { COMPANY_STATUS: string[] };
  @Input() selectedFinancialMetrics!: any;
  //all criteria
  @Input() dropdownAllCriteria!: any[];

  criteriaTableData: any[] = [];
  criteriaPayloadData: { [key: string]: any } = {};

  //new criteria
  @Input() newCriteriaToAdd!: any;
  newCriteriaPayloadData: { [key: string]: any } = {};
  currentYear: string = "";
  // Operator display mapping
  private operatorDisplayMap: { [key: string]: string } = {
    eq: "=",
    ne: "≠",
    lt: "<",
    gt: ">",
    gte: "≥",
    lte: "≤",
    plus: "+",
    minus: "-",
    times: "×",
    div: "÷",
    between: "Between",
    isna: "Is NA",
    isnotna: "Is Not NA",
  };

  // Track the selection order of ALL criteria
  private selectionOrder: string[] = [];

  // Define which criteria are manual (won't be fully deleted)
  private readonly MANUAL_CRITERIA = ["Industry Classification", "Location"];

  // Add a subject to trigger count update with debounce
  private countUpdateTrigger = new Subject<void>();

  constructor() {
    // Set up the subscription to handle debounced count updates
    this.countUpdateTrigger.pipe(debounceTime(300)).subscribe(() => {
      // Check if we have any criteria data to send
      const hasAnyCriteria = Object.keys(this.criteriaPayloadData).length > 0;

      if (hasAnyCriteria) {
        console.log(
          "Triggering count fetch with criteria:",
          this.criteriaPayloadData
        );
        this.fetchCountForAllCriteria();
      } else {
        // Clear all counts when no criteria
        this.criteriaTableData.forEach((row) => {
          row.count = null;
        });
        this.cdr.detectChanges();
      }
    });
  }

  ngOnInit(): void {
    // Initialize manual criteria objects

    this.criteriaTableData = [
      {
        count: null,
        display: [],
        type: "Industry Classification",
        isManual: true,
      },
      {
        count: null,
        display: [],
        type: "Location",
        isManual: true,
      },
    ];

    this.processCriteriaData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let criteriaChanged = false;
    console.log(this.selectedLocation);
    console.log(this.selectedSector);
    criteriaChanged =
      this.updateCriteria("Industry Classification", () => {
        const display = this.minimalSelectedSector;
        if (!display?.length) return null;

        const payload = {
          primaryIndustry: this.selectedSector?.GICS_PRIMARY_INDUSTRY || [],
        };
        return {
          display,
          payload,
          keys: ["primaryIndustry"],
        };
      }) || criteriaChanged;

    criteriaChanged =
      this.updateCriteria("Company Type", () => {
        const display = [
          ...(this.selectedCompanyType?.COMPANY_TYPE || []),
          ...(this.selectedCompanyStatus?.COMPANY_STATUS || []),
        ];
        if (!display.length) return null;

        const payload = {
          COMPANY_TYPE: this.selectedCompanyType?.COMPANY_TYPE || [],
          COMPANY_STATUS: this.selectedCompanyStatus?.COMPANY_STATUS || [],
        };
        return {
          display,
          payload,
          keys: ["COMPANY_TYPE", "COMPANY_STATUS"],
        };
      }) || criteriaChanged;

    criteriaChanged =
      this.updateCriteria("Location", () => {
        const display = this.minimalSelectedLocation;
        if (!display?.length) return null;

        const payload = {
          state: this.selectedLocation.grouped?.STATE || [],
          //province: this.selectedLocation.grouped?.PROVINCE || [],
          // countryName: this.selectedLocation.grouped?.COUNTRY_NAME || [],
          // usRegion: this.selectedLocation.grouped?.US_REGION || [],
          // geography: this.selectedLocation.grouped?.GEOGRAPHY || [],
        };
        return {
          display,
          payload,
          keys: ["state", "province", "countryName", "usRegion", "geography"],
        };
      }) || criteriaChanged;

    criteriaChanged =
      this.updateCriteria("Financial Metrics", () => {
        if (
          !this.selectedFinancialMetrics ||
          !Object.keys(this.selectedFinancialMetrics).length
        )
          return null;

        const display: string[] = [];
        const payload: any = {};

        const displayKeyMap: { [key: string]: string } = {
          TOTAL_REVENUE__LATEST_FISCAL_YEAR____000__1: "Revenue",
          EBITDA__LATEST_FISCAL_YEAR____000__1: "EBITDA",
          NET_INCOME__LATEST_FISCAL_YEAR____000__1: "Net Income",
          ENTERPRISE_VALUE__LATEST_FISCAL_YEAR____000__1: "Enterprise Value",
          FISCAL_PERIOD__1: "Fiscal Period",
        };

        for (const key in this.selectedFinancialMetrics) {
          const metric = this.selectedFinancialMetrics[key];
          if (metric?.min != null || metric?.max != null) {
            const min = metric.min != null ? metric.min : "";
            const max = metric.max != null ? metric.max : "";
            const displayKey = displayKeyMap[key] || key;
            display.push(`${displayKey}: ${min || "–"} - ${max || "–"}`);
            payload[key] = { min, max };
          }
        }

        if (!display.length) return null;

        return {
          display,
          payload,
          keys: Object.keys(payload),
        };
      }) || criteriaChanged;

    // Handle new criteria addition
    if (changes["newCriteriaToAdd"] && this.newCriteriaToAdd) {
      console.log("New criteria to add:", this.newCriteriaToAdd);
      this.processNewCriteria(this.newCriteriaToAdd);
      criteriaChanged = true;
    }

    // Only trigger the count update if criteria actually changed
    if (criteriaChanged) {
      console.log("Criteria changed, triggering count update");
      this.countUpdateTrigger.next();
    }

    if (changes["dropdownAllCriteria"]) {
      this.processCriteriaData();
    }
  }

  // Process new criteria from dropdown selection
  processNewCriteria(newCriteria: any): void {
    const year = newCriteria.year;

    // Update current year (for now, single year support)
    this.currentYear = year;

    // Process each filter group in the new criteria
    Object.keys(newCriteria).forEach((key) => {
      if (key !== "year") {
        const filterGroup = newCriteria[key];
        this.processFilterGroup(key, filterGroup);
      }
    });
  }
  // Process individual filter group (e.g., balanceSheetAssetsFilters)
  processFilterGroup(parentFilter: string, filterGroup: any): void {
    // If this parent filter already exists, merge with existing data
    if (!this.newCriteriaPayloadData[parentFilter]) {
      this.newCriteriaPayloadData[parentFilter] = {};
    }

    // Process each criteria within the filter group
    Object.keys(filterGroup).forEach((criteriaKey) => {
      const criteriaData = filterGroup[criteriaKey];

      // Merge with existing criteria data
      if (!this.newCriteriaPayloadData[parentFilter][criteriaKey]) {
        this.newCriteriaPayloadData[parentFilter][criteriaKey] = {};
      }

      // Add the operator and value
      Object.assign(
        this.newCriteriaPayloadData[parentFilter][criteriaKey],
        criteriaData
      );

      // Add to criteria table display
      this.addNewCriteriaToTable(parentFilter, criteriaKey, criteriaData);
    });
  }
  // Add new criteria to the table display
  addNewCriteriaToTable(
    parentFilter: string,
    criteriaKey: string,
    criteriaData: any
  ): void {
    const displayName = this.formatCriteriaDisplayName(criteriaKey);
    const type = `${this.formatParentFilterName(
      parentFilter
    )} - ${displayName}`;

    // Create display text
    const displayText = this.createCriteriaDisplayText(
      displayName,
      criteriaData
    );

    // Check if this criteria type already exists
    const existingRow = this.criteriaTableData.find((r) => r.type === type);

    if (existingRow) {
      // Update existing row
      if (!existingRow.display.includes(displayText)) {
        existingRow.display.push(displayText);
      }
      existingRow.count = "Loading";
    } else {
      // Add new row
      const newRow = {
        type: type,
        display: [displayText],
        count: "Loading",
        isManual: false,
        parentFilter: parentFilter,
        criteriaKey: criteriaKey,
      };

      this.criteriaTableData.push(newRow);

      // Add to selection order
      if (!this.selectionOrder.includes(type)) {
        this.selectionOrder.push(type);
      }
    }

    // Re-sort the criteria data
    this.sortCriteriaData();
  }
  createCriteriaDisplayText(displayName: string, criteriaData: any): string {
    const operator = Object.keys(criteriaData)[0];
    const value = criteriaData[operator];
    const operatorSymbol = this.operatorDisplayMap[operator] || operator;

    let displayText = `${displayName} ${operatorSymbol} ${value}`;

    // Add year if available
    if (this.currentYear) {
      displayText += ` (${this.currentYear})`;
    }

    return displayText;
  }

  // Format criteria display name (convert camelCase to readable)
  formatCriteriaDisplayName(criteriaKey: string): string {
    return criteriaKey
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  }
  formatParentFilterName(parentFilter: string): string {
    const nameMap: { [key: string]: string } = {
      balanceSheetAssetsFilters: "Balance Sheet Assets",
      incomeStatementFilters: "Income Statement",
      cashFlowFilters: "Cash Flow",
      financialRatiosFilters: "Financial Ratios",
    };

    return (
      nameMap[parentFilter] || parentFilter.replace(/([A-Z])/g, " $1").trim()
    );
  }
  clearAllNewCriteria(): void {
    // Remove all new criteria from table
    this.criteriaTableData = this.criteriaTableData.filter(
      (row) => !row.parentFilter || this.MANUAL_CRITERIA.includes(row.type)
    );

    // Clear new criteria payload
    this.newCriteriaPayloadData = {};
    this.currentYear = "";

    // Update selection order
    this.selectionOrder = this.selectionOrder.filter((type) =>
      this.criteriaTableData.some((row) => row.type === type)
    );

    // Re-sort and update
    this.sortCriteriaData();
    this.countUpdateTrigger.next();
  }

  updateCriteria(
    type: string,
    getData: () => {
      display: string[];
      payload: { [key: string]: any };
      keys: string[];
    } | null
  ): boolean {
    const result = getData();
    const hasData = !!result;
    let criteriaChanged = false;
    const isManual = this.MANUAL_CRITERIA.includes(type);

    console.log(this.criteriaTableData);

    if (!hasData) {
      if (isManual) {
        // For manual criteria, just clear display and count but keep the object
        const existingRow = this.criteriaTableData.find((r) => r.type === type);
        if (
          existingRow &&
          (existingRow.display.length > 0 || existingRow.count !== null)
        ) {
          existingRow.display = [];
          existingRow.count = null;
          criteriaChanged = true;

          // Remove from selection order
          const orderIndex = this.selectionOrder.indexOf(type);
          if (orderIndex > -1) {
            this.selectionOrder.splice(orderIndex, 1);
          }

          // Re-sort to maintain proper order
          this.sortCriteriaData();
        }
      } else {
        // For non-manual criteria, remove completely
        if (this.criteriaTableData.some((r) => r.type === type)) {
          criteriaChanged = true;
        }
        this.criteriaTableData = this.criteriaTableData.filter(
          (r) => r.type !== type
        );

        // Remove from selection order
        const orderIndex = this.selectionOrder.indexOf(type);
        if (orderIndex > -1) {
          this.selectionOrder.splice(orderIndex, 1);
        }
      }

      // Remove payload keys
      this.removePayloadKeys(type);
      return criteriaChanged;
    }

    const { display, payload, keys } = result;

    // Check if the payload actually changed
    let payloadChanged = false;
    for (const key of keys) {
      const oldValue = JSON.stringify(this.criteriaPayloadData[key]);
      const newValue = JSON.stringify(payload[key]);
      if (oldValue !== newValue) {
        payloadChanged = true;
        this.criteriaPayloadData[key] = payload[key];
      }
    }

    const existingRow = this.criteriaTableData.find((r) => r.type === type);

    if (!payloadChanged && existingRow && existingRow.display.length > 0) {
      // If nothing changed and we already have data, don't update anything
      return false;
    }

    criteriaChanged = true;

    // Add to selection order if not already there
    if (!this.selectionOrder.includes(type)) {
      this.selectionOrder.push(type);
    }

    const rowData = {
      type,
      display,
      count: "Loading", // Placeholder until we get the actual count
      isManual,
    };

    if (existingRow) {
      // Preserve the count if it exists and is not a placeholder
      if (existingRow.count && existingRow.count !== "...") {
        rowData.count = existingRow.count;
      }
      // Update existing row
      Object.assign(existingRow, rowData);
    } else {
      // Add new row (for non-manual criteria)
      this.criteriaTableData.push(rowData);
    }

    // Sort the criteria data to maintain proper order
    this.sortCriteriaData();

    return criteriaChanged;
  }

  private sortCriteriaData(): void {
    this.criteriaTableData.sort((a, b) => {
      const aOrder = this.selectionOrder.indexOf(a.type);
      const bOrder = this.selectionOrder.indexOf(b.type);

      // If both have data (are in selection order), sort by selection order
      if (aOrder !== -1 && bOrder !== -1) {
        return aOrder - bOrder;
      }

      // If only one has data, the one with data comes first
      if (aOrder !== -1 && bOrder === -1) return -1;
      if (aOrder === -1 && bOrder !== -1) return 1;

      // If neither has data (both are empty manual criteria), maintain original order
      const aIsManual = this.MANUAL_CRITERIA.includes(a.type);
      const bIsManual = this.MANUAL_CRITERIA.includes(b.type);

      if (aIsManual && bIsManual) {
        // Sort by the original manual criteria order
        return (
          this.MANUAL_CRITERIA.indexOf(a.type) -
          this.MANUAL_CRITERIA.indexOf(b.type)
        );
      }

      return 0;
    });
  }

  private removePayloadKeys(type: string): void {
    if (type === "Industry Classification") {
      delete this.criteriaPayloadData["primaryIndustry"];
    } else if (type === "Company Type") {
      delete this.criteriaPayloadData["COMPANY_TYPE"];
      delete this.criteriaPayloadData["COMPANY_STATUS"];
    } else if (type === "Financial Metrics") {
      const keys = [
        "TOTAL_REVENUE__LATEST_FISCAL_YEAR____000__1",
        "EBITDA__LATEST_FISCAL_YEAR____000__1",
        "NET_INCOME__LATEST_FISCAL_YEAR____000__1",
        "ENTERPRISE_VALUE__LATEST_FISCAL_YEAR____000__1",
        "FISCAL_PERIOD__1",
      ];
      keys.forEach((key) => delete this.criteriaPayloadData[key]);
    } else if (type === "Location") {
      delete this.criteriaPayloadData["geography"];
      delete this.criteriaPayloadData["countryName"];
      delete this.criteriaPayloadData["usRegion"];
      delete this.criteriaPayloadData["state"];
      delete this.criteriaPayloadData["province"];
    }
  }

  // Get only the rows that have data (for arrow visibility logic)
  get visibleRows(): any[] {
    return this.criteriaTableData.filter((row) => row.display.length > 0);
  }

  // Check if up arrow should be visible
  canMoveUp(index: number): boolean {
    const visibleRows = this.visibleRows;
    const currentRow = this.criteriaTableData[index];
    const visibleIndex = visibleRows.findIndex(
      (row) => row.type === currentRow.type
    );
    return visibleIndex > 0 && currentRow.display.length > 0;
  }

  // Check if down arrow should be visible
  canMoveDown(index: number): boolean {
    const visibleRows = this.visibleRows;
    const currentRow = this.criteriaTableData[index];
    const visibleIndex = visibleRows.findIndex(
      (row) => row.type === currentRow.type
    );
    return (
      visibleIndex < visibleRows.length - 1 &&
      visibleIndex !== -1 &&
      currentRow.display.length > 0
    );
  }

  // Move row up
  moveRowUp(index: number): void {
    const currentRow = this.criteriaTableData[index];
    if (!this.canMoveUp(index)) return;

    // Find the current position in selection order
    const currentOrderIndex = this.selectionOrder.indexOf(currentRow.type);
    if (currentOrderIndex > 0) {
      // Swap with the previous item in selection order
      [
        this.selectionOrder[currentOrderIndex],
        this.selectionOrder[currentOrderIndex - 1],
      ] = [
        this.selectionOrder[currentOrderIndex - 1],
        this.selectionOrder[currentOrderIndex],
      ];

      // Re-sort the table data
      this.sortCriteriaData();

      // Rebuild payload in new order and trigger API call
      this.rebuildPayloadAndUpdate();
    }
  }

  // Move row down
  moveRowDown(index: number): void {
    const currentRow = this.criteriaTableData[index];
    if (!this.canMoveDown(index)) return;

    // Find the current position in selection order
    const currentOrderIndex = this.selectionOrder.indexOf(currentRow.type);
    if (
      currentOrderIndex < this.selectionOrder.length - 1 &&
      currentOrderIndex !== -1
    ) {
      // Swap with the next item in selection order
      [
        this.selectionOrder[currentOrderIndex],
        this.selectionOrder[currentOrderIndex + 1],
      ] = [
        this.selectionOrder[currentOrderIndex + 1],
        this.selectionOrder[currentOrderIndex],
      ];

      // Re-sort the table data
      this.sortCriteriaData();

      // Rebuild payload in new order and trigger API call
      this.rebuildPayloadAndUpdate();
    }
  }

  // Rebuild payload in the new order and trigger API update
  private rebuildPayloadAndUpdate(): void {
    const newPayload: { [key: string]: any } = {};

    // Rebuild payload in the new selection order
    for (const type of this.selectionOrder) {
      const row = this.criteriaTableData.find((r) => r.type === type);
      if (row && row.display.length > 0) {
        // Add the payload keys for this criteria type
        if (type === "Industry Classification") {
          if (this.criteriaPayloadData["primaryIndustry"]) {
            newPayload["primaryIndustry"] =
              this.criteriaPayloadData["primaryIndustry"];
          }
        } else if (type === "Company Type") {
          if (this.criteriaPayloadData["COMPANY_TYPE"]) {
            newPayload["COMPANY_TYPE"] =
              this.criteriaPayloadData["COMPANY_TYPE"];
          }
          if (this.criteriaPayloadData["COMPANY_STATUS"]) {
            newPayload["COMPANY_STATUS"] =
              this.criteriaPayloadData["COMPANY_STATUS"];
          }
        } else if (type === "Location") {
          if (this.criteriaPayloadData["state"]) {
            newPayload["state"] = this.criteriaPayloadData["state"];
          }
          if (this.criteriaPayloadData["province"]) {
            newPayload["province"] = this.criteriaPayloadData["province"];
          }
          if (this.criteriaPayloadData["geography"]) {
            newPayload["geography"] = this.criteriaPayloadData["geography"];
          }
          if (this.criteriaPayloadData["countryName"]) {
            newPayload["countryName"] = this.criteriaPayloadData["countryName"];
          }
          if (this.criteriaPayloadData["usRegion"]) {
            newPayload["usRegion"] = this.criteriaPayloadData["usRegion"];
          }
        } else if (type === "Financial Metrics") {
          const financialKeys = [
            "TOTAL_REVENUE__LATEST_FISCAL_YEAR____000__1",
            "EBITDA__LATEST_FISCAL_YEAR____000__1",
            "NET_INCOME__LATEST_FISCAL_YEAR____000__1",
            "ENTERPRISE_VALUE__LATEST_FISCAL_YEAR____000__1",
            "FISCAL_PERIOD__1",
          ];
          financialKeys.forEach((key) => {
            if (this.criteriaPayloadData[key]) {
              newPayload[key] = this.criteriaPayloadData[key];
            }
          });
        }
      }
    }

    // Update the payload
    this.criteriaPayloadData = newPayload;

    // Trigger the count update
    this.countUpdateTrigger.next();

    // Trigger change detection
    this.cdr.detectChanges();
  }

  // Helper method to build the payload with companyFilters wrapper
  private buildPayloadWithCompanyFilters(): { [key: string]: any } {
    const payload: { [key: string]: any } = {
      companyFilters: { ...this.criteriaPayloadData },
    };

    // Add year if available
    if (this.currentYear) {
      payload["year"] = this.currentYear;
    }

    // Add new criteria payload data (outside companyFilters)
    Object.keys(this.newCriteriaPayloadData).forEach((key) => {
      payload[key] = this.newCriteriaPayloadData[key];
    });

    return payload;
  }

  fetchCountForAllCriteria() {
    // Build payload with companyFilters wrapper
    const payloadWithFilters = this.buildPayloadWithCompanyFilters();

    console.log("Making single API call with payload:", payloadWithFilters);

    this._apiService.getCount(payloadWithFilters).subscribe({
      next: (res) => {
        console.log("Count API response:", res);
        // Update counts for all criteria at once
        this.updateAllCounts(res.counts);
      },
      error: (err) => {
        console.error("Count fetch error:", err);
        // Mark all counts as error
        this.criteriaTableData.forEach((row) => {
          if (row.display.length > 0) {
            row.count = "Error";
          }
        });
        this.cdr.detectChanges();
      },
    });
  }

  private updateAllCounts(counts: any[]) {
    const categoryMap: { [key: string]: string } = {
      "Industry Classification": "primaryIndustry",
      "Company Type": "COMPANY_STATUS",
      "Financial Metrics": "FINANCIAL_METRICS",
      Location: "geography",
    };

    this.criteriaTableData.forEach((row) => {
      const category = categoryMap[row.type];
      if (category) {
        // Special handling for Location type - check in priority order
        if (row.type === "Location") {
          // Get all location counts
          const geographyCount = counts.find((c) => c.category === "geography");
          const countryCount = counts.find((c) => c.category === "countryName");
          const regionCount = counts.find((c) => c.category === "usRegion");
          const stateCount = counts.find((c) => c.category === "state");
          const provinceCount = counts.find((c) => c.category === "province");

          // Check what data is actually present in the payload
          const hasGeography =
            this.criteriaPayloadData["geography"]?.length > 0;
          const hasCountry =
            this.criteriaPayloadData["countryName"]?.length > 0;
          const hasRegion = this.criteriaPayloadData["usRegion"]?.length > 0;
          const hasState = this.criteriaPayloadData["state"]?.length > 0;
          const hasProvince = this.criteriaPayloadData["province"]?.length > 0;

          // Priority order: state > usRegion > countryName > geography
          if (hasState || hasProvince) {
            // Combine state and province counts if both present
            let totalCount = 0;
            if (hasState && stateCount) {
              totalCount += stateCount.count;
            }
            if (hasProvince && provinceCount) {
              totalCount += provinceCount.count;
            }
            row.count = totalCount > 0 ? totalCount : null;
          } else if (hasRegion && regionCount) {
            row.count = regionCount.count;
          } else if (hasCountry && countryCount) {
            row.count = countryCount.count;
          } else if (hasGeography && geographyCount) {
            row.count = geographyCount.count;
          } else {
            row.count = null; // No location count found
          }
        } else {
          // For other criteria types, use the existing logic
          const countData = counts.find((c) => c.category === category);
          row.count = countData ? countData.count : null; // Null instead of 0 for empty count
        }
      } else {
        // Handle new criteria types (from dropdown)
        if (row.criteriaKey) {
          const countData = counts.find((c) => c.category === row.criteriaKey);
          row.count = countData ? countData.count : null;
        }
      }
    });

    this.cdr.detectChanges();
  }

  deleteRow(table: any) {
    const type = table.type;
    const isManual = this.MANUAL_CRITERIA.includes(type);

    if (isManual) {
      // For manual criteria, clear display and count
      table.display = [];
      table.count = null;
    } else {
      if (table.parentFilter && table.criteriaKey) {
        if (this.newCriteriaPayloadData[table.parentFilter]) {
          delete this.newCriteriaPayloadData[table.parentFilter][
            table.criteriaKey
          ];

          // If parent filter is empty, remove it
          if (
            Object.keys(this.newCriteriaPayloadData[table.parentFilter])
              .length === 0
          ) {
            delete this.newCriteriaPayloadData[table.parentFilter];
          }
        }
      }
      // For non-manual criteria, remove completely
      this.criteriaTableData = this.criteriaTableData.filter(
        (r) => r.type !== type
      );
    }

    // Remove from selection order
    const orderIndex = this.selectionOrder.indexOf(type);
    if (orderIndex > -1) {
      this.selectionOrder.splice(orderIndex, 1);
    }

    // Re-sort to maintain proper order
    this.sortCriteriaData();

    // Remove payload keys for standard criteria
    this.removePayloadKeys(type);

    // Tell parent to clear original selection
    this.clearSelection.emit(type);

    // Update counts with the modified payload
    this.countUpdateTrigger.next();
  }

  showCriteria(type: string) {
    this.openCriteriaSelector.emit(type);
  }

  companiesCluster: any[] = [];
  getCompaniesCluster() {
    // Build payload with companyFilters wrapper
    const payloadWithFilters = this.buildPayloadWithCompanyFilters();

    this._apiService.getCompanyCluster(payloadWithFilters, 0, 10).subscribe({
      next: (res) => {
        this.companiesCluster = res.content;
        this.companiesClusterData.emit(this.companiesCluster); // Emit the data to the parent component
        this.isCriteriaExpanded = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // New properties for dropdown functionality
  searchText: string = "";
  isDropdownOpen: boolean = false;
  flattenedCriteria: any[] = [];
  filteredCriteria: any[] = [];
  selectedDropdownCriteria: any = null;
  highlightedIndex: number = -1;

  // New methods for dropdown functionality
  processCriteriaData() {
    if (this.dropdownAllCriteria && this.dropdownAllCriteria.length > 0) {
      this.flattenedCriteria = [];
      this.flattenData(this.dropdownAllCriteria, "");
      this.filteredCriteria = [...this.flattenedCriteria];
    }
  }

  flattenData(items: any[], parentPath: string = "", parentFilter?: string) {
    items.forEach((item) => {
      const currentPath = parentPath
        ? `${parentPath} > ${item.name}`
        : item.name;

      // If item has children, recursively flatten them
      if (item.children && item.children.length > 0) {
        this.flattenData(
          item.children,
          currentPath,
          item.parentFilter || parentFilter
        );
      } else {
        // This is a leaf node, add it to flattened criteria
        this.flattenedCriteria.push({
          id: item.id,
          name: item.name,
          fullPath: currentPath,
          parentFilter: item.parentFilter || parentFilter,
          parameters: item.parameters,
          yearType: item.yearType,
          fiscalYear: item.fiscalYear,
          fiscalQuarter: item.fiscalQuarter,
        });
      }
    });
  }

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
    this.filterCriteria();
    this.isDropdownOpen = this.searchText.length > 0;
    this.highlightedIndex = -1;
  }

  onSearchFocus() {
    if (this.searchText.length > 0) {
      this.isDropdownOpen = true;
    }
  }

  onSearchClick() {
    if (!this.isDropdownOpen && this.filteredCriteria.length > 0) {
      this.isDropdownOpen = true;
    }
  }

  filterCriteria() {
    if (!this.searchText.trim()) {
      this.filteredCriteria = [...this.flattenedCriteria];
    } else {
      const searchLower = this.searchText.toLowerCase();
      this.filteredCriteria = this.flattenedCriteria.filter(
        (criteria) =>
          criteria.name.toLowerCase().includes(searchLower) ||
          criteria.fullPath.toLowerCase().includes(searchLower)
      );
    }
  }

  selectDropdownCriteria(criteria: any) {
    this.selectedDropdownCriteria = criteria;
    this.searchText = criteria.name;
    this.isDropdownOpen = false;
    this.highlightedIndex = -1;
    console.log("Selected criteria from dropdown:", criteria);
    this.changedDropdownCriteria.emit(criteria);
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.isDropdownOpen) {
      if (event.key === "ArrowDown" || event.key === "Enter") {
        this.isDropdownOpen = true;
        event.preventDefault();
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this.highlightedIndex = Math.min(
          this.highlightedIndex + 1,
          this.filteredCriteria.length - 1
        );
        this.scrollToHighlighted();
        break;
      case "ArrowUp":
        event.preventDefault();
        this.highlightedIndex = Math.max(this.highlightedIndex - 1, -1);
        this.scrollToHighlighted();
        break;
      case "Enter":
        event.preventDefault();
        if (
          this.highlightedIndex >= 0 &&
          this.highlightedIndex < this.filteredCriteria.length
        ) {
          this.selectDropdownCriteria(
            this.filteredCriteria[this.highlightedIndex]
          );
        }
        break;
      case "Escape":
        this.isDropdownOpen = false;
        this.highlightedIndex = -1;
        break;
    }
  }

  scrollToHighlighted() {
    setTimeout(() => {
      const highlightedElement = document.querySelector(
        ".dropdown-item.highlighted"
      );
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    });
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest(".search_parent")) {
      this.isDropdownOpen = false;
      this.highlightedIndex = -1;
    }
  }

  clearDropdownSearch() {
    this.searchText = "";
    this.selectedDropdownCriteria = null;
    this.filteredCriteria = [...this.flattenedCriteria];
    this.isDropdownOpen = false;
    this.highlightedIndex = -1;
  }

  // addDropdownCriteria() {
  //   if (this.selectedDropdownCriteria) {
  //     console.log(
  //       "Adding criteria from dropdown:",
  //       this.selectedDropdownCriteria
  //     );
  //     // Process the selected criteria here
  //     // You can call your existing logic or emit an event

  //     // Clear after adding
  //     this.clearDropdownSearch();
  //   } else {
  //     console.log("No criteria selected from dropdown");
  //   }
  // }

  getDisplayPath(criteria: any): string {
    const pathParts = criteria.fullPath.split(" > ");
    if (pathParts.length > 3) {
      return `...${pathParts.slice(-2).join(" > ")}`;
    }
    return criteria.fullPath;
  }
}
