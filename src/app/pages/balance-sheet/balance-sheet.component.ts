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
  selector: 'app-balance-sheet',
  imports: [NgbModule, NgxSliderModule, CommonModule, FormatNumberPipe],
  templateUrl: './balance-sheet.component.html',
  styleUrl: './balance-sheet.component.scss'
})
export class BalanceSheetComponent implements OnInit {
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
        'Current assets': {
          _items: [
            {
              line_item: 'Cash and equivalents',
              us_gaap_name: 'us-gaap:CashAndCashEquivalentsAtCarryingValue',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 5524000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 12814000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 9201.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 9746
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 8449.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 39924.0
                }
              ]
            },
            {
              line_item: 'Short-term investments',
              us_gaap_name: 'us-gaap:ShortTermInvestments',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 31000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 2000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 28.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 84
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 30.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 0.0
                }
              ]
            },
            {
              line_item: 'Accounts receivable, net',
              us_gaap_name: 'us-gaap:AccountsReceivableNetCurrent',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 10919000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 11155000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 11254.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 9977
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 8822.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 5428.0
                }
              ]
            },
            {
              line_item: 'Inventories',
              us_gaap_name: 'us-gaap:InventoryNet',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 4181000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 4099000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 3579.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 3128
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 3310.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 1813.0
                }
              ]
            },
            {
              line_item: 'Prepaid expenses and other',
              us_gaap_name: 'us-gaap:PrepaidExpenseAndOtherAssets',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 4927000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 4932000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 4401.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 4993
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 3562.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 2354.0
                }
              ]
            },
            {
              line_item: 'Total current assets',
              us_gaap_name: 'us-gaap:AssetsCurrent',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 25582000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 33002000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 28463.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 27928
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 24173.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 49519.0
                }
              ]
            }
          ]
        },
        'Non-current assets': {
          _items: [
            {
              line_item: 'Investments',
              us_gaap_name: 'us-gaap:LongTermInvestments',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 279000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 304000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 241.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 277
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 293.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 93.0
                }

              ]
            },
            {
              line_item: 'Property and equipment, net',
              us_gaap_name: 'us-gaap:PropertyPlantAndEquipmentNet',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 5134000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 4989000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 4935.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 5110
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 5248.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 2962.0
                }
              ]
            },
            {
              line_item: 'Intangible assets, net',
              us_gaap_name: 'us-gaap:IntangibleAssetsNetExcludingGoodwill',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 60068000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 55610000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 67439.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 75951
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 82876.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 18649.0
                }
              ]
            },
            {
              line_item: 'Goodwill',
              us_gaap_name: 'us-gaap:Goodwill',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 34956000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 32293000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 32156.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 32379
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 33124.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 15604.0
                }
              ]
            },
            {
              line_item: 'Other assets',
              us_gaap_name: 'us-gaap:OtherAssetsNoncurrent',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 9142000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 8513000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 5571.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 4884
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 4851.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 2288.0
                }
              ]
            },
            {
              line_item: 'Total assets',
              us_gaap_name: 'us-gaap:Assets',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 135161000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 134711000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 138805.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 146529
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 150565.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 89115.0
                }
              ]
            }
          ]
        }
      },
      LIABILITIES_AND_EQUITY: {
        Liabilities: {
          'Current liabilities': {
            _items: [
              {
                line_item: 'Current portion of long-term debt',
                us_gaap_name:
                  'us-gaap:LongTermDebtAndCapitalLeaseObligationsCurrent',
                values: [
                  {
                    contextref: 'c13',
                    '2024': 6804000000.0
                  },
                  {
                    contextref: 'c14',
                    '2023': 7191000000.0
                  },
                  {
                    contextref: 'c-16',
                    '2022': 4135.0
                  },
                  {
                    contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                    '2021': 12481
                  }
                ]
              },
              {
                line_item: 'Accounts payable and accrued liabilities',
                us_gaap_name:
                  'us-gaap:AccountsPayableAndAccruedLiabilitiesCurrent',
                values: [
                  {
                    contextref: 'c-14',
                    '2024': 30650.0
                  },
                  {
                    contextref: 'c-13',
                    '2023': 31945.0
                  },
                  {
                    contextref: 'c-16',
                    '2022': 25402.0
                  },
                  {
                    contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                    '2021': 22699
                  }
                ]
              },
              {
                line_item: 'Short-term borrowings',
                us_gaap_name: 'us-gaap:ShortTermBorrowings',
                values: [
                  {
                    contextref: 'c-15',
                    '2023': 0.0
                  },
                  {
                    contextref: 'c-16',
                    '2022': 1.0
                  },
                  {
                    contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                    '2021': 14
                  },

                ]
              },
              {
                line_item: 'Total current liabilities',
                us_gaap_name: 'us-gaap:LiabilitiesCurrent',
                values: [
                  {
                    contextref: 'c-14',
                    '2024': 37841.0
                  },
                  {
                    contextref: 'c-13',
                    '2023': 38749.0
                  },
                  {
                    contextref: 'c-16',
                    '2022': 29538.0
                  },
                  {
                    contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                    '2021': 35194
                  }
                ]
              }
              
            ]
          },
          'Non-current liabilities': {
            _items: [
              {
                line_item: 'Long-term debt and finance lease obligations',
                us_gaap_name: 'us-gaap:LongTermDebtAndCapitalLeaseObligations',
                values: [
                  {
                    contextref: 'c-13',
                    '2024': 60340000000.0
                  },
                  {
                    contextref: 'c-14',
                    '2023': 52194000000.0
                  },
                  {
                    contextref: 'c-16',
                    '2022': 59135.0
                  },
                  {
                    contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                    '2021': 64189
                  }
                ]
              },

              {
                line_item: 'Deferred income taxes',
                us_gaap_name: 'us-gaap:DeferredIncomeTaxLiabilitiesNet',
                values: [
                  {
                    contextref: 'c-13',
                    '2024': 2579000000.0
                  },
                  {
                    contextref: 'c-14',
                    '2023': 1952000000.0
                  },
                  {
                    contextref: 'c-16',
                    '2022': 2190.0
                  },
                  {
                    contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                    '2021': 3009
                  }
                ]
              },
              {
                line_item: 'Other long-term liabilities',
                us_gaap_name: 'us-gaap:OtherLiabilitiesNoncurrent',
                values: [
                  {
                    contextref: 'c-13',
                    '2024': 30129000000.0
                  },
                  {
                    contextref: 'c-14',
                    '2023': 32327000000.0
                  },
                  {
                    contextref: 'c-16',
                    '2022': 30655.0
                  },
                  {
                    contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                    '2021': 28701
                  }
                ]
              }
            ]
          }
        },
        Equity: {
          _items: [
            {
              line_item: 'Common stock',
              us_gaap_name: 'us-gaap:CommonStockValueOutstanding',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 18000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 18000000.0
                }
              ]
            },
            {
              line_item: 'Common stock held in treasury',
              us_gaap_name: 'us-gaap:TreasuryStockValue',
              values: [
                {
                  contextref: 'c-13',
                  '2024': -8201000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': -6533000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': -4594.0
                }
              ]
            },
            {
              line_item: 'Additional paid-in capital',
              us_gaap_name: 'us-gaap:AdditionalPaidInCapitalCommonStock',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 21333000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 20180000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 19245.0
                }
              ]
            },
            {
              line_item: 'Accumulated deficit',
              us_gaap_name: 'us-gaap:RetainedEarningsAccumulatedDeficit',
              values: [
                {
                  contextref: 'c-13',
                  '2024': -7900000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': -1000000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 4784.0
                }
              ]
            },
            {
              line_item: 'Accumulated other comprehensive loss',
              us_gaap_name:
                'us-gaap:AccumulatedOtherComprehensiveIncomeLossNetOfTax',
              values: [
                {
                  contextref: 'c-13',
                  '2024': -1925000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': -2305000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': -2199.0
                }
              ]
            },
            {
              line_item: "Total stockholders' equity",
              us_gaap_name: 'us-gaap:StockholdersEquity',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 3325000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 10360000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 17254.0
                },
                {
                  "contextref": "ia7ae543d4088468692b597f4060a59a6_I20211231",
                  "2021": 15408
                }
              ]
            },
            {
              line_item: 'Noncontrolling interest',
              us_gaap_name: 'us-gaap:MinorityInterest',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 39000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 37000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 33.0
                },
                {
                  "contextref": "ia7ae543d4088468692b597f4060a59a6_I20211231",
                  "2021": 28
                }
              ]
            },
            {
              line_item: 'Total equity',
              us_gaap_name:
                'us-gaap:StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest',
              values: [
                {
                  contextref: 'c-13',
                  '2024': 3364000000.0
                },
                {
                  contextref: 'c-14',
                  '2023': 10397000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 17287.0
                }
              ]
            },
            {
              "line_item": "Common stock, $0.01 par value",
              "us_gaap_name": "us-gaap:CommonStockParOrStatedValuePerShare",
              "values": [
                {
                  "contextref": "c-15",
                  "2023": 18.0
                },
                {
                  "contextref": "c-16",
                  "2022": 18.0
                }
              ]
            },
          ]
        },
        'Total liabilities and equity': {
          _items: [
            {
              line_item: 'Total liabilities and equity',
              us_gaap_name: 'us-gaap:LiabilitiesAndStockholdersEquity',
              values: [
                {
                  contextref: 'c13',
                  '2024': 135161000000.0
                },
                {
                  contextref: 'c-15',
                  '2023': 134711000000.0
                },
                {
                  contextref: 'c-16',
                  '2022': 138805.0
                },
                {
                  contextref: 'ia7ae543d4088468692b597f4060a59a6_I20211231',
                  '2021': 146529
                },
                {
                  "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                  "2020": 150565.0
                },
                {
                  "contextref": "iaceb897de7e0459bb3d5848755ec314e_I20191231",
                  "2019": 89115.0
                }
              ]
            }
          ]
        }
      }
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
    if(year == 2019){
      filePath = `assets/2020.htm`;
    }else if(year == 2020){
      filePath = `assets/2021.htm`;
    }else if(year == 2021){
      filePath = `assets/2022.htm`;
    }else if(year == 2022){
      filePath = `assets/2023.htm`;
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
