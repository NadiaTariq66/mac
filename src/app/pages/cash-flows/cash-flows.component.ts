
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
  selector: 'app-cash-flows',
  imports: [NgbModule, NgxSliderModule, CommonModule, FormatNumberPipe],
  templateUrl: './cash-flows.component.html',
  styleUrls: ['./cash-flows.component.scss']
})
export class CashFlowsComponent implements OnInit {
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
  "cash_flows": {
    "Cash Flows": {
      "Operating Activities": {
        "_items": [
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
            "line_item": "Adjustments to reconcile net earnings to net cash from operating activities",
            "us_gaap_name": "",
            "values": []
          },
          {
            "line_item": "Depreciation",
            "us_gaap_name": "us-gaap:Depreciation",
            "values": [
              {
                "contextref": "c-1",
                "2024": 764.0
              },
              {
                "contextref": "c-11",
                "2023": 752.0
              },
              {
                "contextref": "c-12",
                "2022": 778.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 803
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 666
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 464
              }
            ]
          },
          {
            "line_item": "Amortization of intangible assets",
            "us_gaap_name": "us-gaap:AmortizationOfIntangibleAssets",
            "values": [
              {
                "contextref": "c-1",
                "2024": 7622.0
              },
              {
                "contextref": "c-11",
                "2023": 7946.0
              },
              {
                "contextref": "c-12",
                "2022": 7689.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 7718
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 5805
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 1553
              }
            ]
          },
          {
            "line_item": "Deferred income taxes",
            "us_gaap_name": "us-gaap:DeferredIncomeTaxExpenseBenefit",
            "values": [
              {
                "contextref": "c-1",
                "2024": -1449.0
              },
              {
                "contextref": "c-11",
                "2023": -2889.0
              },
              {
                "contextref": "c-12",
                "2022": -1931.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -898
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -2325
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 122
              }
            ]
          },
          {
            "line_item": "Change in fair value of contingent consideration liabilities",
            "us_gaap_name": "us-gaap:BusinessCombinationContingentConsiderationArrangementsChangeInAmountOfContingentConsiderationLiability1",
            "values": [
              {
                "contextref": "c-1",
                "2024": 3771.0
              },
              {
                "contextref": "c-11",
                "2023": 5128.0
              },
              {
                "contextref": "c-12",
                "2022": 2761.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 2679
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 5753
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 3091
              }
            ]
          },
          {
            "line_item": "Payments of contingent consideration liabilities",
            "us_gaap_name": "us-gaap:PaymentForContingentConsiderationLiabilityOperatingActivities",
            "values": [
              {
                "contextref": "c-1",
                "2024": -1995.0
              },
              {
                "contextref": "c-11",
                "2023": -870.0
              },
              {
                "contextref": "c-12",
                "2022": -164.0
              }
            ]
          },
          {
            "line_item": "Stock-based compensation",
            "us_gaap_name": "us-gaap:ShareBasedCompensation",
            "values": [
              {
                "contextref": "c-1",
                "2024": 911.0
              },
              {
                "contextref": "c-11",
                "2023": 747.0
              },
              {
                "contextref": "c-12",
                "2022": 671.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 692
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 753
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 430
              }
            ]
          },
          {
            "line_item": "Acquired IPR&D and milestones",
            "us_gaap_name": "abbv:UpfrontCostsRelatedToCollaborations",
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
                "2021": 1624
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 1376
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 490
              }
            ]
          },
          {
            "line_item": "Gain on divestitures",
            "us_gaap_name": "us-gaap:GainLossOnSaleOfOtherAssets",
            "values": [
              {
                "contextref": "c-1",
                "2024": 0.0
              },
              {
                "contextref": "c-11",
                "2023": 0.0
              },
              {
                "contextref": "c-12",
                "2022": -172.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -68
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 0
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 330
              }
            ]
          },
          {
            "line_item": "Non-cash litigation reserve adjustments, net of cash payments",
            "us_gaap_name": "abbv:NonCashLitigationReserveAdjustmentsNetOfCashPayments",
            "values": [
              {
                "contextref": "c-1",
                "2024": 508.0
              },
              {
                "contextref": "c-11",
                "2023": -443.0
              },
              {
                "contextref": "c-12",
                "2022": 2243.0
              }
            ]
          },
          {
            "line_item": "Impairment of intangible assets",
            "us_gaap_name": "us-gaap:ImpairmentOfIntangibleAssetsExcludingGoodwill",
            "values": [
              {
                "contextref": "c-1",
                "2024": 4476.0
              },
              {
                "contextref": "c-11",
                "2023": 4229.0
              },
              {
                "contextref": "c-12",
                "2022": 770.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 0
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 0
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 1030
              }
            ]
          },
          {
            "line_item": "Other, net",
            "us_gaap_name": "us-gaap:OtherNoncashIncomeExpense",
            "values": [
              {
                "contextref": "c-1",
                "2024": -63.0
              },
              {
                "contextref": "c-11",
                "2023": -225.0
              },
              {
                "contextref": "c-12",
                "2022": -150.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 0
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -832
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -43
              }
            ]
          },
          {
            "line_item": "Changes in operating assets and liabilities, net of acquisitions",
            "us_gaap_name": "",
            "values": []
          },
          {
            "line_item": "Accounts receivable",
            "us_gaap_name": "us-gaap:IncreaseDecreaseInAccountsReceivable",
            "values": [
              {
                "contextref": "c-1",
                "2024": -207.0
              },
              {
                "contextref": "c-11",
                "2023": -66.0
              },
              {
                "contextref": "c-12",
                "2022": -1455.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -1321
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -929
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -74
              }
            ]
          },
          {
            "line_item": "Inventories",
            "us_gaap_name": "us-gaap:IncreaseDecreaseInInventories",
            "values": [
              {
                "contextref": "c-1",
                "2024": -319.0
              },
              {
                "contextref": "c-11",
                "2023": -417.0
              },
              {
                "contextref": "c-12",
                "2022": -686.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -142
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -40
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -231
              }
            ]
          },
          {
            "line_item": "Prepaid expenses and other assets",
            "us_gaap_name": "us-gaap:IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets",
            "values": [
              {
                "contextref": "c-1",
                "2024": -361.0
              },
              {
                "contextref": "c-11",
                "2023": -188.0
              },
              {
                "contextref": "c-12",
                "2022": -264.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -197
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -134
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -225
              }
            ]
          },
          {
            "line_item": "Accounts payable and other liabilities",
            "us_gaap_name": "us-gaap:IncreaseDecreaseInAccountsPayableAndAccruedLiabilities",
            "values": [
              {
                "contextref": "c-1",
                "2024": -177.0
              },
              {
                "contextref": "c-11",
                "2023": 3840.0
              },
              {
                "contextref": "c-12",
                "2022": 1769.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -1628
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 1514
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 97
              }
            ]
          },
          {
            "line_item": "Income tax assets and liabilities, net",
            "us_gaap_name": "us-gaap:IncreaseDecreaseInIncomeTaxesPayableNetOfIncomeTaxesReceivable",
            "values": [
              {
                "contextref": "c-1",
                "2024": -3208.0
              },
              {
                "contextref": "c-11",
                "2023": -488.0
              },
              {
                "contextref": "c-12",
                "2022": 542.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -1290
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -573
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -1018
              }
            ]
          },
          {
            "line_item": "Cash flows from operating activities",
            "us_gaap_name": "us-gaap:NetCashProvidedByUsedInOperatingActivities",
            "values": [
              {
                "contextref": "c-1",
                "2024": 18806.0
              },
              {
                "contextref": "c-11",
                "2023": 22839.0
              },
              {
                "contextref": "c-12",
                "2022": 24943.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 22777
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 17588
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 13324
              }
            ]
          }
        ]
      },
      "Investing Activities": {
        "_items": [
          {
            "line_item": "Acquisition of businesses, net of cash acquired",
            "us_gaap_name": "us-gaap:PaymentsToAcquireBusinessesNetOfCashAcquired",
            "values": [
              {
                "contextref": "c-1",
                "2024": -17493.0
              },
              {
                "contextref": "c-11",
                "2023": 0.0
              },
              {
                "contextref": "c-12",
                "2022": -255.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -525
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -38260
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 0
              }
            ]
          },
          {
            "line_item": "Other acquisitions and investments",
            "us_gaap_name": "us-gaap:PaymentsToAcquireOtherInvestments",
            "values": [
              {
                "contextref": "c-1",
                "2024": -3024.0
              },
              {
                "contextref": "c-11",
                "2023": -1223.0
              },
              {
                "contextref": "c-12",
                "2022": -539.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -1377
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -1350
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -1135
              }
            ]
          },
          {
            "line_item": "Acquisitions of property and equipment",
            "us_gaap_name": "us-gaap:PaymentsToAcquirePropertyPlantAndEquipment",
            "values": [
              {
                "contextref": "c-1",
                "2024": -974.0
              },
              {
                "contextref": "c-11",
                "2023": -777.0
              },
              {
                "contextref": "c-12",
                "2022": -695.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -787
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -798
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -552
              }
            ]
          },
          {
            "line_item": "Purchases of investment securities",
            "us_gaap_name": "us-gaap:PaymentsToAcquireMarketableSecurities",
            "values": [
              {
                "contextref": "c-1",
                "2024": -73.0
              },
              {
                "contextref": "c-11",
                "2023": -77.0
              },
              {
                "contextref": "c-12",
                "2022": -1438.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -119
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -61
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -583
              }
            ]
          },
          {
            "line_item": "Sales and maturities of investment securities",
            "us_gaap_name": "us-gaap:ProceedsFromSaleMaturityAndCollectionsOfInvestments",
            "values": [
              {
                "contextref": "c-1",
                "2024": 555.0
              },
              {
                "contextref": "c-11",
                "2023": 55.0
              },
              {
                "contextref": "c-12",
                "2022": 1530.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 98
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 1525
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 2699
              }
            ]
          },
          {
            "line_item": "Other, net",
            "us_gaap_name": "us-gaap:PaymentsForProceedsFromOtherInvestingActivities",
            "values": [
              {
                "contextref": "c-1",
                "2024": -189.0
              },
              {
                "contextref": "c-11",
                "2023": -13.0
              },
              {
                "contextref": "c-12",
                "2022": -774.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -366
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -1387
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -167
              }
            ]
          },
          {
            "line_item": "Cash flows from investing activities",
            "us_gaap_name": "us-gaap:NetCashProvidedByUsedInInvestingActivities",
            "values": [
              {
                "contextref": "c-1",
                "2024": -20820.0
              },
              {
                "contextref": "c-11",
                "2023": -2009.0
              },
              {
                "contextref": "c-12",
                "2022": -623.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -2344
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -37557
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -596
              }
            ]
          }
        ]
      },
      "Financing Activities": {
        "_items": [
          {
            "line_item": "Proceeds from issuance of other short-term borrowings",
            "us_gaap_name": "us-gaap:ProceedsFromShortTermDebt",
            "values": [
              {
                "contextref": "c-1",
                "2024": 5008.0
              },
              {
                "contextref": "c-11",
                "2023": 0.0
              },
              {
                "contextref": "c-12",
                "2022": 0.0
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": "—"
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 0
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 0
              }
            ]
          },
          {
            "line_item": "Net change in commercial paper borrowings",
            "us_gaap_name": "us-gaap:ProceedsFromRepaymentsOfCommercialPaper",
            "values": [
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 0
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": "-"
              },
              {
                "contextref": "iac8aa413125a4be0a68a652a4ce2128d_D20190101-20191231",
                "2019": -699
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 0
              }
            ]
          },
          {
            "line_item": "Repayments of other short-term borrowings",
            "us_gaap_name": "us-gaap:RepaymentsOfOtherShortTermDebt",
            "values": [
              {
                "contextref": "c-1",
                "2024": -5008.0
              },
              {
                "contextref": "c-11",
                "2023": 0.0
              },
              {
                "contextref": "c-12",
                "2022": 0.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 0
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": "—"
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 0
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -3000
              }
            ]
          },
          {
            "line_item": "Proceeds from issuance of long-term debt",
            "us_gaap_name": "us-gaap:ProceedsFromIssuanceOfLongTermDebt",
            "values": [
              {
                "contextref": "c-1",
                "2024": 16963.0
              },
              {
                "contextref": "c-11",
                "2023": 0.0
              },
              {
                "contextref": "c-12",
                "2022": 2000.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 1000
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 3000
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 31482
              }
            ]
          },
          {
            "line_item": "Repayments of long-term debt and finance lease obligations",
            "us_gaap_name": "us-gaap:RepaymentsOfLongTermDebtAndCapitalSecurities",
            "values": [
              {
                "contextref": "c-1",
                "2024": -9613.0
              },
              {
                "contextref": "c-11",
                "2023": -4149.0
              },
              {
                "contextref": "c-12",
                "2022": -14433.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -9414
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 5683
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -5683
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -1536
              }
            ]
          },
          {
            "line_item": "Debt issuance costs",
            "us_gaap_name": "us-gaap:PaymentOfFinancingAndStockIssuanceCosts",
            "values": [
              {
                "contextref": "c-1",
                "2024": -99.0
              },
              {
                "contextref": "c-11",
                "2023": -38.0
              },
              {
                "contextref": "c-12",
                "2022": 0.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 0
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -20
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -424
              }
            ]
          },
          {
            "line_item": "Dividends paid",
            "us_gaap_name": "us-gaap:PaymentsOfDividends",
            "values": [
              {
                "contextref": "c-1",
                "2024": -11025.0
              },
              {
                "contextref": "c-11",
                "2023": -10539.0
              },
              {
                "contextref": "c-12",
                "2022": -10043.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -9261
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 7176
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -7716
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -6366
              }
            ]
          },
          {
            "line_item": "Purchases of treasury stock",
            "us_gaap_name": "us-gaap:PaymentsForRepurchaseOfCommonStock",
            "values": [
              {
                "contextref": "c-1",
                "2024": -1708.0
              },
              {
                "contextref": "c-11",
                "2023": -1972.0
              },
              {
                "contextref": "c-12",
                "2022": -1487.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -934
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -978
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -629
              }
            ]
          },
          {
            "line_item": "Proceeds from the exercise of stock options",
            "us_gaap_name": "us-gaap:ProceedsFromStockOptionsExercised",
            "values": [
              {
                "contextref": "c-1",
                "2024": 214.0
              },
              {
                "contextref": "c-11",
                "2023": 180.0
              },
              {
                "contextref": "c-12",
                "2022": 262.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 244
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 209
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 8
              }
            ]
          },
          {
            "line_item": "Payments of contingent consideration liabilities",
            "us_gaap_name": "us-gaap:PaymentForContingentConsiderationLiabilityFinancingActivities",
            "values": [
              {
                "contextref": "c-1",
                "2024": 0.0
              },
              {
                "contextref": "c-11",
                "2023": -752.0
              },
              {
                "contextref": "c-12",
                "2022": -1132.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -698
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -321
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -163
              }
            ]
          },
          {
            "line_item": "Other, net",
            "us_gaap_name": "us-gaap:ProceedsFromPaymentsForOtherFinancingActivities",
            "values": [
              {
                "contextref": "c-1",
                "2024": 57.0
              },
              {
                "contextref": "c-11",
                "2023": 48.0
              },
              {
                "contextref": "c-12",
                "2022": 30.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 24
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 8
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 35
              }
            ]
          },
          {
            "line_item": "Cash flows from financing activities",
            "us_gaap_name": "us-gaap:NetCashProvidedByUsedInFinancingActivities",
            "values": [
              {
                "contextref": "c-1",
                "2024": -5211.0
              },
              {
                "contextref": "c-11",
                "2023": -17222.0
              },
              {
                "contextref": "c-12",
                "2022": -24803.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -19039
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -11501
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -18708
              }
            ]
          }
        ]
      },
      "Other Supplemental Information": {
        "_items": [
          {
            "line_item": "Effect of exchange rate changes on cash and equivalents",
            "us_gaap_name": "us-gaap:EffectOfExchangeRateOnCashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents",
            "values": [
              {
                "contextref": "c-1",
                "2024": -65.0
              },
              {
                "contextref": "c-11",
                "2023": -5.0
              },
              {
                "contextref": "c-12",
                "2022": -62.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": -97
              }
            ]
          },
          {
            "line_item": "Net change in cash and equivalents",
            "us_gaap_name": "us-gaap:CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect",
            "values": [
              {
                "contextref": "c-1",
                "2024": -7290.0
              },
              {
                "contextref": "c-11",
                "2023": -3613.0
              },
              {
                "contextref": "c-12",
                "2022": -545.0
              },
              {
                "contextref": "i68614ee8b42e4629886a79ae8fd7c911_D20210101-20211231",
                "2021": 1297
              }
            ]
          },
          {
            "line_item": "Cash and equivalents, beginning of year",
            "us_gaap_name": "us-gaap:CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents",
            "values": [
              {
                "contextref": "c-14",
                "2024": 12814.0
              },
              {
                "contextref": "c-34",
                "2023": 9201.0
              },
              {
                "contextref": "c-21",
                "2022": 9746.0
              },
              {
                "contextref": "ib85043ef5d7d4f9db44cd0817acd53b2_I20201231",
                "2020": 8449
              }
            ]
          },
          {
            "line_item": "Cash and equivalents, end of year",
            "us_gaap_name": "us-gaap:CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents",
            "values": [
              {
                "contextref": "c-13",
                "2024": 5524.0
              },
              {
                "contextref": "c-14",
                "2023": 12814.0
              },
              {
                "contextref": "c-34",
                "2022": 9201.0
              },
              {
                "contextref": "ibac06b189a224e6dbb636ae6efd8cbf3_I20211231",
                "2021": 9746
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 8449
              }
            ]
          },
          {
            "line_item": "Interest paid, net of portion capitalized",
            "us_gaap_name": "us-gaap:InterestPaidNet",
            "values": [
              {
                "contextref": "c-1",
                "2024": 2811.0
              },
              {
                "contextref": "c-11",
                "2023": 2469.0
              },
              {
                "contextref": "c-12",
                "2022": 2546.0
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 2619
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 1794
              }
            ]
          },
          {
            "line_item": "Income taxes paid",
            "us_gaap_name": "us-gaap:IncomeTaxesPaid",
            "values": [
              {
                "contextref": "c-1",
                "2024": 4064.0
              },
              {
                "contextref": "c-11",
                "2023": 4702.0
              },
              {
                "contextref": "c-12",
                "2022": 2988.0
              },
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": -1674
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": -1447
              }
            ]
          },
          {
            "line_item": "Supplemental schedule of non-cash investing and financing activities",
            "us_gaap_name": null,
            "values": []
          },
          {
            "line_item": "Issuance of common shares associated with acquisitions of businesses",
            "us_gaap_name": "us-gaap:StockIssued1",
            "values": [
              {
                "contextref": "if55ec762c43345b8b67e87328fd0c371_D20200101-20201231",
                "2020": 23979
              },
              {
                "contextref": "i8a949e3b6e15485ea59a224dd3a5a92e_D20190101-20191231",
                "2019": 0
              }
            ]
          }
        ]
      }
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
    if(year == 2018 || year == 2019 || year == 2020){
      filePath = `assets/2020.htm`;
    }else if(year == 2021){
      filePath = `assets/2021.htm`;
    }
    // if(year == 2019){
    //   filePath = `assets/2020.htm`;
    // }else if(year == 2020){
    //   filePath = `assets/2021.htm`;
    // }else if(year == 2021){
    //   filePath = `assets/2022.htm`;
    // }else if(year == 2022){
    //   filePath = `assets/2023.htm`;
    // }
    
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
