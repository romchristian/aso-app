import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';

@Component({
  selector: 'app-menu-item-link',
  templateUrl: './menu-item-link.component.html',
  styleUrls: ['./menu-item-link.component.css']
})
export class MenuItemLinkComponent implements OnInit {

  @Input() item?: MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
