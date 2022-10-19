import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-menu-section',
  templateUrl: './module-menu-section.component.html',
  styleUrls: ['./module-menu-section.component.css'],
})
export class ModuleMenuSectionComponent implements OnInit {
  @Input() title = 'title';
  constructor() {}

  ngOnInit(): void {}
}
