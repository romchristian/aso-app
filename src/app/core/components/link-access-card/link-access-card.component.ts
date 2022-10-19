import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-access-card',
  templateUrl: './link-access-card.component.html',
  styleUrls: ['./link-access-card.component.css'],
})
export class LinkAccessCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() img: string = '';
  @Input() color: string = '';
  constructor() {}

  ngOnInit(): void {}
}
