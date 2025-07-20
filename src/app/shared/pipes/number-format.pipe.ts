import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
  standalone: true
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number | string, unit?: 'millions' | 'thousands' | 'smartMillions'): string {
    let numberValue = typeof value === 'string'
      ? parseFloat(value.replace(/,/g, ''))
      : Number(value);

    if (isNaN(numberValue)) return '';

    // Unit conversion
    if (unit === 'millions') {
      numberValue = numberValue / 1_000_000;
    } else if (unit === 'thousands') {
      numberValue = numberValue / 1_000;
    } else if (unit === 'smartMillions') {
      if (Math.abs(numberValue) > 10_000_000) {
        numberValue = numberValue / 1_000_000;
      }
    }

    if (numberValue === 0) {
      return 'NA';
    }

    const isNegative = numberValue < 0;
    const absValue = Math.abs(numberValue);

    const formatted = absValue.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

    return isNegative ? `(${formatted})` : formatted;
  }
}
