import { Routes } from '@angular/router';
import { ScreeningComponent } from './pages/screening/screening.component';
import { Screening2Component } from './pages/screening2/screening2.component';
import { SectorsIndustriesComponent } from './pages/sectors-industries/sectors-industries.component';
import { BusinessDescriptionComponent } from './pages/business-description/business-description.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { BusinessCyclesBackingStatusComponent } from './pages/business-cycles-backing-status/business-cycles-backing-status.component';
import { DealsInvestorsComponent } from './pages/deals-investors/deals-investors.component';
import { FinancialMetricsComponent } from './pages/financial-metrics/financial-metrics.component';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { BalanceSheetComponent } from './pages/balance-sheet/balance-sheet.component';
import { IncomeStatementComponent } from './pages/income-statement/income-statement.component';
import { CashFlowsComponent } from './pages/cash-flows/cash-flows.component';
import { BusinessInfoComponent } from './pages/business-info/business-info.component';
import { StockPriceAndDateComponent } from './pages/stock-price-and-date/stock-price-and-date.component';

export const routes: Routes = [
  {
    path: '', component: ScreeningComponent
  },
  {
    path: 'screening2', component: Screening2Component
  },
  {
    path: 'sectors-industries', component: SectorsIndustriesComponent
  },
  {
    path: 'business-description', component: BusinessDescriptionComponent
  },
  {
    path: 'locations', component: LocationsComponent
  },
  {
    path: 'businesscycles', component: BusinessCyclesBackingStatusComponent
  },
  {
    path: 'deals-investors', component: DealsInvestorsComponent
  },
  {
    path: 'financial-metrics', component: FinancialMetricsComponent
  },
  {
    path: 'company-dashboard', component: CompanyDashboardComponent
  },
  {
    path: 'balance-sheet', component: BalanceSheetComponent
  },
  {
    path: 'income-statement', component: IncomeStatementComponent
  },
  {
    path: 'cash-flows', component: CashFlowsComponent
  },
  {
    path: 'business-info', component: BusinessInfoComponent
  },
  {
    path: 'price-and-date', component: StockPriceAndDateComponent
  }
];
