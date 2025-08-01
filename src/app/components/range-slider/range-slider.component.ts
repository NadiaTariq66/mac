import { Component, Output, EventEmitter, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface RangeValue {
  min: number;
  max: number;
}

@Component({
  selector: "app-range-slider",
  imports: [CommonModule],
  templateUrl: "./range-slider.component.html",
  styleUrl: "./range-slider.component.scss",
})
export class RangeSliderComponent {
  @Input() min: number = 2019;
  @Input() max: number = 2024;
  @Input() initialMin: number = 2019;
  @Input() initialMax: number = 2024;

  @Output() valueChange = new EventEmitter<RangeValue>();

  currentValue: RangeValue = {
    min: this.initialMin,
    max: this.initialMax,
  };

  ngOnInit() {
    this.currentValue = {
      min: this.initialMin,
      max: this.initialMax,
    };
  }

  onMinChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newMin = parseInt(target.value);

    if (newMin <= this.currentValue.max) {
      this.currentValue.min = newMin;
      this.emitChange();
    } else {
      // Reset to previous value if invalid
      target.value = this.currentValue.min.toString();
    }
  }

  onMaxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newMax = parseInt(target.value);

    if (newMax >= this.currentValue.min) {
      this.currentValue.max = newMax;
      this.emitChange();
    } else {
      // Reset to previous value if invalid
      target.value = this.currentValue.max.toString();
    }
  }

  private emitChange() {
    this.valueChange.emit({ ...this.currentValue });
  }

  getPercentage(value: number): number {
    return ((value - this.min) / (this.max - this.min)) * 100;
  }
}
