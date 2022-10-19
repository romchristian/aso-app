import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-access-card',
  templateUrl: './module-access-card.component.html',
  styleUrls: ['./module-access-card.component.css'],
})
export class ModuleAccessCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() route: string = '';
  @Input() img: string = '';
  @Input() color: string = '';

  constructor() {}

  ngOnInit(): void {}
}
