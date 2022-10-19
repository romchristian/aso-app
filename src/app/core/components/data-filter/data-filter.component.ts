import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.css'],
})
export class DataFilterComponent implements OnInit {
  @Input() filterFields: any[] = [];
  @Input() queryParams: any;
  @Output() onSearch = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.setDefaultValues();
  }

  search() {
    this.onSearch.emit(this.queryParams);
  }

  onSelect(filter: any, observer: any) {
    if (observer) {
      observer.next(filter);
    }
  }

  setDefaultValues() {
    this.filterFields.forEach((filter) => {
      if (filter.defaultValue) {
        this.queryParams[filter.field] = filter.defaultValue;
      }
    });
  }
}
