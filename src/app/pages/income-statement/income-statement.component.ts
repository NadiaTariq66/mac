
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
import { FormatNumberPipe } from '../../shared/pipes/number-format.pipe'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  standalone: true,
  selector: 'app-income-statement',
  imports: [NgbModule, NgxSliderModule, CommonModule, FormatNumberPipe],
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.scss']
})
export class IncomeStatementComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal
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
  definationList = [
    {
      term: 'Assets ($000)',
      definition:
        'Assets represent economic resources controlled by an entity expected to provide future benefits, reported in thousands of dollars.',
      citation: 'See ASC 210-10',
      full_defination:
        'Assets represent economic resources controlled by an entity expected to provide future benefits, reported in thousands of dollars. (See ASC 210-10)',
      tab: 'key_highlights',
      term_key: 'assets_000'
    },
    {
      term: 'Cash and Equivalents',
      definition:
        'Cash and Cash Equivalents include currency, bank deposits, and highly liquid investments with original maturities of three months or less.',
      citation: 'See ASC 230-10-20',
      full_defination:
        'Cash and Equivalents include currency, bank deposits, and highly liquid investments with original maturities of three months or less. (See ASC 230-10-20)',
      tab: 'key_highlights',
      term_key: 'cash_and_equivalents'
    },
    {
      term: 'Short Term Investments',
      definition:
        'Short Term Investments are marketable securities and other investments expected to be converted to cash within one year or operating cycle.',
      citation: 'See ASC 320-10',
      full_defination:
        'Short Term Investments are marketable securities and other investments expected to be converted to cash within one year or operating cycle. (See ASC 320-10)',
      tab: 'key_highlights',
      term_key: 'short_term_investments'
    },
    {
      term: 'Cash & Short-term Investments',
      definition:
        'Cash & Short-term Investments includes cash, cash equivalents, and marketable securities expected to be liquidated within one year.',
      citation: 'See ASC 305-10',
      full_defination:
        'Cash & Short-term Investments includes cash, cash equivalents, and marketable securities expected to be liquidated within one year. (See ASC 305-10)',
      tab: 'key_highlights',
      term_key: 'cash_and_short_term_investments'
    },
    {
      term: 'Accounts Receivable',
      definition:
        'Accounts Receivable are amounts due from customers for goods or services delivered or used but not yet paid for.',
      citation: 'See ASC 310-10',
      full_defination:
        'Accounts Receivable are amounts due from customers for goods or services delivered or used but not yet paid for. (See ASC 310-10)',
      tab: 'key_highlights',
      term_key: 'accounts_receivable'
    },
    {
      term: 'Inventory',
      definition:
        'Inventory consists of goods held for sale in the ordinary course of business or in production for such sale.',
      citation: 'See ASC 330-10',
      full_defination:
        'Inventory consists of goods held for sale in the ordinary course of business or in production for such sale. (See ASC 330-10)',
      tab: 'key_highlights',
      term_key: 'inventory'
    },
    {
      term: 'Gross Property, Plant & Equipment',
      definition:
        'Gross Property, Plant & Equipment is the total cost of all property, plant, and equipment before accumulated depreciation.',
      citation: 'See ASC 360-10',
      full_defination:
        'Gross Property, Plant & Equipment is the total cost of all property, plant, and equipment before accumulated depreciation. (See ASC 360-10)',
      tab: 'key_highlights',
      term_key: 'gross_property_plant_equipment'
    },
    {
      term: 'Accumulated Depreciation',
      definition:
        'Accumulated Depreciation is the total depreciation expense charged on property, plant, and equipment to date.',
      citation: 'See ASC 360-10',
      full_defination:
        'Accumulated Depreciation is the total depreciation expense charged on property, plant, and equipment to date. (See ASC 360-10)',
      tab: 'key_highlights',
      term_key: 'accumulated_depreciation'
    },
    {
      term: 'Net Property, Plant & Equipment',
      definition:
        'Net Property, Plant & Equipment equals gross property, plant, and equipment less accumulated depreciation.',
      citation: 'See ASC 360-10',
      full_defination:
        'Net Property, Plant & Equipment equals gross property, plant, and equipment less accumulated depreciation. (See ASC 360-10)',
      tab: 'key_highlights',
      term_key: 'net_property_plant_equipment'
    },
    {
      term: 'Long-term Investments',
      definition:
        'Long-term Investments are investments not intended to be liquidated within one year or operating cycle.',
      citation: 'See ASC 320-10',
      full_defination:
        'Long-term Investments are investments not intended to be liquidated within one year or operating cycle. (See ASC 320-10)',
      tab: 'key_highlights',
      term_key: 'long_term_investments'
    },
    {
      term: 'Goodwill',
      definition:
        'Goodwill represents the excess of purchase price over fair value of net identifiable assets acquired in a business combination.',
      citation: 'See ASC 350-20',
      full_defination:
        'Goodwill represents the excess of purchase price over fair value of net identifiable assets acquired in a business combination. (See ASC 350-20)',
      tab: 'key_highlights',
      term_key: 'goodwill'
    },
    {
      term: 'Other Intangibles',
      definition:
        'Other Intangibles are non-physical assets such as patents, trademarks, and customer relationships, excluding goodwill.',
      citation: 'See ASC 350-30',
      full_defination:
        'Other Intangibles are non-physical assets such as patents, trademarks, and customer relationships, excluding goodwill. (See ASC 350-30)',
      tab: 'key_highlights',
      term_key: 'other_intangibles'
    },
    {
      term: 'Other Long-Term Assets',
      definition:
        'Other Long-Term Assets are assets not classified elsewhere and expected to provide benefits beyond one year.',
      citation: 'See ASC 210-10',
      full_defination:
        'Other Long-Term Assets are assets not classified elsewhere and expected to provide benefits beyond one year. (See ASC 210-10)',
      tab: 'key_highlights',
      term_key: 'other_long_term_assets'
    },
    {
      term: 'Total Assets',
      definition:
        'Total Assets represent the sum of all current and long-term assets owned by an entity.',
      citation: 'See ASC 210-10',
      full_defination:
        'Total Assets represent the sum of all current and long-term assets owned by an entity. (See ASC 210-10)',
      tab: 'key_highlights',
      term_key: 'total_assets'
    }
  ]
  popoverTitle: string = ''
  popoverContent: string = ''
  getPopoverContent(termKey: string) {
    const item = this.definationList.find(d => d.term_key === termKey)
    if (!item) return null

    return {
      title: item.term,
      content: item.full_defination
    }
  }

  showPopover(
    termKey: string,
    table_label: string = '',
    row_label: string = ''
  ) {
    const data = this.getPopoverContent(termKey)
    this.popoverTitle = ''
    this.popoverContent = ''
    let title_extras = ''
    if (data) {
      if (table_label.indexOf('($000)') > -1) {
        title_extras = ' ($000)'
      } else if (row_label.indexOf('(x)') > -1) {
        title_extras = ' (x)'
      }
      this.popoverTitle = data.title + title_extras
      this.popoverContent = data.content
    }
  }

  getRouterURL() {
    return this.router.url
  }
  navigate(url: string) {
    this.router.navigate([url])
  }
  mockApiResponse = [
    {
      ' ASSETS': {
        'Consolidated Statements of Earnings': {
          _items: [
            {
              "line_item": "Net revenues",
              "us_gaap_name": "us-gaap:Revenues",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 56334.0
                },
                {
                  "contextref": "c-11",
                  "2023": 54318.0
                },
                {
                  "contextref": "c-12",
                  "2022": 58054.0
                },
                {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 56197
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 45804
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 33266
                }
              ]
            },
            {
              "line_item": "Cost of products sold",
              "us_gaap_name": "us-gaap:CostOfGoodsAndServicesSold",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 16904.0
                },
                {
                  "contextref": "c-11",
                  "2023": 20415.0
                },
                {
                  "contextref": "c-12",
                  "2022": 17414.0
                },
                {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 17446
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 15387
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 7439
                }
              ]
            },
            {
              "line_item": "Selling, general and administrative",
              "us_gaap_name": "us-gaap:SellingGeneralAndAdministrativeExpense",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 14752.0
                },
                {
                  "contextref": "c-11",
                  "2023": 12872.0
                },
                {
                  "contextref": "c-12",
                  "2022": 15260.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 12349
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 11299
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 6942
                }
              ]
            },
            {
              "line_item": "Research and development",
              "us_gaap_name": "us-gaap:ResearchAndDevelopmentExpenseExcludingAcquiredInProcessCost",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 12791.0
                },
                {
                  "contextref": "c-11",
                  "2023": 7675.0
                },
                {
                  "contextref": "c-12",
                  "2022": 6510.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 7084
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 6557
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 6407
                }
              ]
            },
            {
              "line_item": "Acquired IPR&D and milestones",
              "us_gaap_name": "us-gaap:ResearchAndDevelopmentAssetAcquiredOtherThanThroughBusinessCombinationWrittenOff",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 2757.0
                },
                {
                  "contextref": "c-11",
                  "2023": 778.0
                },
                {
                  "contextref": "c-12",
                  "2022": 697.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 962
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 1198
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 385
                }

              ]
            },
            {
              "line_item": "Other operating expense (income), net",
              "us_gaap_name": "us-gaap:OtherOperatingIncomeExpenseNet",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": -7.0
                },
                {
                  "contextref": "c-11",
                  "2023": -179.0
                },
                {
                  "contextref": "c-12",
                  "2022": -56.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 432
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 0
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 890
                }
              ]
            },
            {
              "line_item": "Total operating costs and expenses",
              "us_gaap_name": "us-gaap:CostsAndExpenses",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 47197.0
                },
                {
                  "contextref": "c-11",
                  "2023": 41561.0
                },
                {
                  "contextref": "c-12",
                  "2022": 39937.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021":38273
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 34441
                },
                {
                    "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                    "2019": 20283
                }
              ]
            },
            {
              "line_item": "Operating earnings",
              "us_gaap_name": "us-gaap:OperatingIncomeLoss",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 9137.0
                },
                {
                  "contextref": "c-11",
                  "2023": 12757.0
                },
                {
                  "contextref": "c-12",
                  "2022": 18117.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 17924
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 11363
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 12983
                }
              ]
            },
            {
              "line_item": "Interest expense, net",
              "us_gaap_name": "us-gaap:InterestIncomeExpenseNonoperatingNet",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": -2160.0
                },
                {
                  "contextref": "c-11",
                  "2023": -1684.0
                },
                {
                  "contextref": "c-12",
                  "2022": -2044.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 2384
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 2280
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 1509
                }
              ]
            },
            {
              "line_item": "Net foreign exchange loss",
              "us_gaap_name": "us-gaap:ForeignCurrencyTransactionGainLossBeforeTax",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": -21.0
                },
                {
                  "contextref": "c-11",
                  "2023": -146.0
                },
                {
                  "contextref": "c-12",
                  "2022": -148.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 51
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 71
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 42
                }
              ]
            },
            {
              "line_item": "Other expense, net",
              "us_gaap_name": "us-gaap:OtherNonoperatingIncomeExpense",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": -3240.0
                },
                {
                  "contextref": "c-11",
                  "2023": -4677.0
                },
                {
                  "contextref": "c-12",
                  "2022": -2448.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 2500
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 5614
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 3006
                }
              ]
            },
            {
              "line_item": "Earnings before income tax expense",
              "us_gaap_name": "us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 3716.0
                },
                {
                  "contextref": "c-11",
                  "2023": 6250.0
                },
                {
                  "contextref": "c-12",
                  "2022": 13477.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 12989
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 3398
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 8426
                }
              ]
            },
            {
              "line_item": "Income tax expense (benefit)",
              "us_gaap_name": "us-gaap:IncomeTaxExpenseBenefit",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": -570.0
                },
                {
                  "contextref": "c-11",
                  "2023": 1377.0
                },
                {
                  "contextref": "c-12",
                  "2022": 1632.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 1440
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 1224
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 544
                }
              ]
            },
            {
              "line_item": "Net earnings",
              "us_gaap_name": "us-gaap:ProfitLoss",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 4286.0
                },
                {
                  "contextref": "c-11",
                  "2023": 4873.0
                },
                {
                  "contextref": "c-12",
                  "2022": 11845.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 11549
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 4622
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 7882
                }
              ]
            },
            {
              "line_item": "Net earnings attributable to noncontrolling interest",
              "us_gaap_name": "us-gaap:NetIncomeLossAttributableToNoncontrollingInterest",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 8.0
                },
                {
                  "contextref": "c-11",
                  "2023": 10.0
                },
                {
                  "contextref": "c-12",
                  "2022": 9.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 7
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 6
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 0
                }
              ]
            },
            {
              "line_item": "Net earnings attributable to AbbVie Inc.",
              "us_gaap_name": "us-gaap:NetIncomeLoss",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 4278.0
                },
                {
                  "contextref": "c-11",
                  "2023": 4863.0
                },
                {
                  "contextref": "c-12",
                  "2022": 11836.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 11542
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 4616
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 7882
                }
              ]
            },
            {
              "line_item": "Basic earnings per share attributable to AbbVie Inc.",
              "us_gaap_name": "us-gaap:EarningsPerShareBasic",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 2.4
                },
                {
                  "contextref": "c-11",
                  "2023": 2.73
                },
                {
                  "contextref": "c-12",
                  "2022": 6.65
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 6.48
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 2.73
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 5.30
                }
              ]
            },
            {
              "line_item": "Diluted earnings per share attributable to AbbVie Inc.",
              "us_gaap_name": "us-gaap:EarningsPerShareDiluted",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 2.39
                },
                {
                  "contextref": "c-11",
                  "2023": 2.72
                },
                {
                  "contextref": "c-12",
                  "2022": 6.63
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021":6.45
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 2.72
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 5.28
                }
            
              ]
            },
            {
              "line_item": "Weighted-average basic shares outstanding",
              "us_gaap_name": "us-gaap:WeightedAverageNumberOfSharesOutstandingBasic",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 1769.0
                },
                {
                  "contextref": "c-11",
                  "2023": 1768.0
                },
                {
                  "contextref": "c-12",
                  "2022": 1771.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021":1770
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 1667
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 1481
                }
              ]
            },
            {
              "line_item": "Weighted-average diluted shares outstanding",
              "us_gaap_name": "us-gaap:WeightedAverageNumberOfDilutedSharesOutstanding",
              "values": [
                {
                  "contextref": "c-1",
                  "2024": 1773.0
                },
                {
                  "contextref": "c-11",
                  "2023": 1773.0
                },
                {
                  "contextref": "c-12",
                  "2022": 1778.0
                },
                 {
                  "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                  "2021": 1777
                },
                {
                  "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                  "2020": 1673
                },
                {
                  "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                  "2019": 1484
                }
              ]
            }
          ]
        }

      },

    }
  ]
  financials: any = []
  ngOnInit() {
    this.financials = this.convertMockApiToFinancialsFullyGeneric(
      this.mockApiResponse
    )
    console.log('Financials:', this.financials)
  }
  @ViewChild('docViewer', { static: false })
  docViewer!: ElementRef<HTMLIFrameElement>
  modelRef: any
  current_gap = ''
  current_context = ''
  openCapIQPopup(popupRef: any, r: any, year: any,dataVal:any) {
    if(!dataVal){
      return;
    }
    console.log('Row:', r)
    console.log('Year:', year);
    console.log('dataVal:', dataVal);
    let filePath = 'assets/10k-file.htm';
    let yearArr = year.split(" ");
    if(yearArr[0]){
      year = yearArr[0];
    }
    if(year == 2018 || year == 2019 || year == 2020){
      filePath = `assets/2020.htm`;
    }else if(year == 2021){
      filePath = `assets/2021.htm`;
    }
    
    this.current_gap = '';
    if (r && r['us_gaap_name']) {
      this.current_gap = r['us_gaap_name']
    }
    if(dataVal && dataVal['contextref']){
        this.current_context = dataVal['contextref'];
    }else{
      if (year == '2024' || year.indexOf('2024') > -1) {
        this.current_context = 'c-13'
      } else {
        this.current_context = 'c-14'
      } 
    }
    console.log(this.current_context)

    this.http
      .get(filePath, { responseType: 'text' })
      .subscribe(html => {
        this.modelRef = this.modalService.open(popupRef, { size: 'xl' })
        setTimeout(() => {
          this.loadDocument(html, popupRef)
        }, 200)
      })
  }
  loadDocument(html: string, popupRef: any) {
    const iframe = this.docViewer.nativeElement
    const doc = iframe.contentDocument || iframe.contentWindow?.document
    if (doc) {
      doc.open()
      doc.write(html)
      doc.close()

      setTimeout(() => {
        const target = doc.querySelector(
          `[name="${this.current_gap}"][contextref="${this.current_context}"]`
        )
        if (target) {
          ; (target as HTMLElement).style.backgroundColor = 'yellow'
            ; (target as HTMLElement).style.transition =
              'background-color 0.5s ease'
          target.scrollIntoView({ behavior: 'smooth', block: 'center' })
        } else {
          console.warn('Target element not found.')
        }
      }, 100)
    }
  }
  convertMockApiToFinancialsFullyGeneric(mockApiResponse: any) {
    const result: any[] = []

    const topLevelData = mockApiResponse[0]
    if (!topLevelData) return result

    // Step 1: Extract all years
    const yearSet = new Set<string>()

    function extractYearsRecursive(node: any) {
      if (!node || typeof node !== 'object') return
      if (Array.isArray(node)) {
        node.forEach(extractYearsRecursive)
      } else if (node._items) {
        node._items.forEach((item: any) => {
          ; (item.values || []).forEach((val: any) => {
            Object.keys(val).forEach(key => {
              if (key !== 'contextref' && /^\d{4}$/.test(key)) {
                yearSet.add(key)
              }
            })
          })
        })
      } else if (node.values) {
        Object.keys(node.values).forEach(year => yearSet.add(year))
      } else {
        Object.values(node).forEach(extractYearsRecursive)
      }
    }

    Object.values(topLevelData).forEach(extractYearsRecursive)

    const sortedYears = Array.from(yearSet).sort()
    const headers = sortedYears.map(year => ({ year: `${year} FY` }))

    // Step 2: Recursive row builder
    function buildRowsRecursive(dataNode: any): any[] {
      const rows: any[] = []

      for (const [label, value] of Object.entries(dataNode) as any) {
        if (value._items) {
          const children = value._items.map((item: any) => ({
            row_head_label: item.line_item,
            row_head_key: item.line_item
              .toLowerCase()
              .replace(/[^a-z0-9]/gi, '_'),
            us_gaap_name: item.us_gaap_name,
            data: sortedYears.map(y => {
              const valObj = (item.values || []).find(
                (v: any) => v[y] !== undefined
              )
              return valObj ? {val : valObj[y],contextref : valObj['contextref']} : null
            })
          }))

          rows.push({
            row_head_label: label,
            row_head_key: label.toLowerCase().replace(/[^a-z0-9]/gi, '_'),
            children
          })
        } else if (value.values) {
          rows.push({
            row_head_label: label,
            row_head_key: label.toLowerCase().replace(/[^a-z0-9]/gi, '_'),
            data: sortedYears.map(y => value.values?.[y] ?? null)
          })
        } else {
          // Further nested group
          const children = buildRowsRecursive(value)
          if (children.length > 0) {
            rows.push({
              row_head_label: label,
              row_head_key: label.toLowerCase().replace(/[^a-z0-9]/gi, '_'),
              children
            })
          }
        }
      }

      return rows
    }

    // Step 3: Create table per top-level section (Assets, Liabilities and Equity)
    for (const [sectionLabel, sectionData] of Object.entries(topLevelData)) {
      const table: any = {
        table_label:
          sectionLabel
            .replace(/_/g, ' ')
            .toLowerCase()
            .replace(/\b\w/g, c => c.toUpperCase()) + ' ($000,000)',
        headers,
        data: buildRowsRecursive(sectionData)
      }

      result.push(table)
    }

    return result
  }

  getPeriodEndedDate(yearLabel: string): string {
    // yearLabel: "2022 FY" => "2022"
    const year = yearLabel.split(' ')[0]
    return `12/31/${year}`
  }
  getCellColor(val: any): string {
    const numVal = typeof val === 'string'
      ? parseFloat(val.replace(/,/g, ''))
      : Number(val);

    if (isNaN(numVal) || numVal === 0) {
      return '#ffffff'; // white for NA
    } else if (numVal < 0) {
      return '#f87171'; // red
    } else {
      return '#60a5fa'; // blue
    }
  }
}
