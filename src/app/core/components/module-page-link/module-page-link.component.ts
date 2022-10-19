import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-page-link',
  templateUrl: './module-page-link.component.html',
  styleUrls: ['./module-page-link.component.css'],
})
export class ModulePageLinkComponent implements OnInit {
  @Input() routerLink = '';
  @Input() icon = 'pi pi-external-link';
  @Input() title = 'title';

  constructor() {}

  ngOnInit(): void {}
}
