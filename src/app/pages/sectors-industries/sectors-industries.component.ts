import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { CheckboxNode } from "../screening/screening.component";
import {
  NestedCheckboxesComponent,
  SelectionPayload,
} from "../../components/nested-checkboxes/nested-checkboxes.component";

@Component({
  selector: "app-sectors-industries",
  imports: [CommonModule, NestedCheckboxesComponent],
  templateUrl: "./sectors-industries.component.html",
  styleUrl: "./sectors-industries.component.scss",
})
export class SectorsIndustriesComponent implements OnInit {
  @Input() clearSectorSelection!: boolean;
  @Output() onClearSectorSelection = new EventEmitter<any>();

  @Input() checkboxData: CheckboxNode[] = [];
  @Output() selectionChange = new EventEmitter<SelectionPayload>();

  onChange(payload: SelectionPayload) {
    this.selectionChange.emit(payload);
  }
  onClearSector($event: any) {
    this.clearSectorSelection = false;
    this.onClearSectorSelection.emit(false);
  }

  ngOnInit() {}
}
