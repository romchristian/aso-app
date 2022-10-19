import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { Page } from '../../model/page';
import { PaginatorEvent } from '../../model/paginator-event';
import { BaseService } from '../../services/base-service';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.css'],
})
export class ListpageComponent implements OnInit, OnDestroy {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() cardUrl: string = '';
  @Input() cols: any[] = [];
  @Input() service: any;
  @Input() staticSort: string = '';
  @Input('permisos') permisosToHeader = {
    create: true,
    read: true,
  };

  selected: any;
  displayFilter: boolean = false;
  queryParams: any;

  data = [];
  totalRecords: number = 0;
  loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.queryParams = {
      page: 0,
      size: 10,
      ...this.cols.filter((c) => c.filter).map((c) => c.field),
      sort: this.staticSort,
    };
    //this.configPaginador();
  }

  ngOnDestroy(): void {}

  configPaginador() {}

  onFilterChange(event: any) {
    this.loading = true;
    this.queryParams = event;
    this.search();
  }

  onRowSelected(event: any) {
    this.selected = event;
  }

  onPaginatorChange(pageEvent: PaginatorEvent) {
    this.loading = true;
    this.queryParams.page = pageEvent.page;
    this.queryParams.size = pageEvent.size;
    this.queryParams.sort = pageEvent.sort;
    this.search();
  }

  onDisplayFilterChange(event: boolean) {
    this.displayFilter = event;
  }

  search() {
    this.service
      .findAll(this.queryParams)
      .pipe(take(1))
      .subscribe((page: any) => {
        this.data = page.content;
        this.totalRecords = page.totalElements;
        this.loading = false;
      });
  }
}
