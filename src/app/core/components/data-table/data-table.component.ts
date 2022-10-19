import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() cols: any[] = [];
  @Input() totalRecords = 0;
  @Input() loading = false;
  @Output() onRowSelectEvent = new EventEmitter();
  @Output() onPaginatorChangeEvent = new EventEmitter();

  @Input() selectedItem: any;

  pageSize = 20;
  currentPage = 0;

  constructor() {}

  ngOnInit(): void {}

  onRowSelect(event: any) {
    this.selectedItem = event.data;
    this.onRowSelectEvent.emit(this.selectedItem);
  }

  onRowUnselect(event: any) {
    this.selectedItem = null;
    this.onRowSelectEvent.emit(this.selectedItem);
  }

  paginatorChange(event: any) {
    this.currentPage = event.first! / this.pageSize;

    let pageEvent = {
      page: this.currentPage,
      size: this.pageSize,
      sort: event.sortField
        ? event.sortOrder === 1
          ? event.sortField + ',asc'
          : event.sortField + ',desc'
        : '',
    };

    this.onPaginatorChangeEvent.emit(pageEvent);
  }

  getTotalSpaces(nivel: number): number {
    return nivel * 2;
  }
}
