import { CardpageService } from './../../services/cardpage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-listpage-header',
  templateUrl: './listpage-header.component.html',
  styleUrls: ['./listpage-header.component.css'],
})
export class ListpageHeaderComponent implements OnInit {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() selected: any;
  @Input() cardUrl: string = '';
  @Input() displayFilter: boolean = false;
  @Output() onDisplayFilterChange = new EventEmitter<boolean>();
  @Input() permisos = {
    create: true,
    read: true,
  };

  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoCard() {
    if (this.selected) {
      this.router.navigate([`${this.cardUrl}/${this.selected.id}`]);
    }
  }

  gotoCardCreate() {
    this.router.navigate([`${this.cardUrl}/create`]);
  }

  displayFilterChange() {
    this.onDisplayFilterChange.emit(!this.displayFilter);
  }
}
