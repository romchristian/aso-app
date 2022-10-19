import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css'],
})
export class DateFilterComponent implements OnInit {
  @Input() date: any;
  @Input() id: any;
  @Input() title: any;
  options = ['=', '<', '>', '<=', '>=', 'Rango'];

  constructor() {}

  ngOnInit(): void {}
}
