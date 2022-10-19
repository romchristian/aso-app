import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-dynamic-breadcrumb',
  templateUrl: './dynamic-breadcrumb.component.html',
  styleUrls: ['./dynamic-breadcrumb.component.css']
})
export class DynamicBreadcrumbComponent implements OnInit, OnDestroy{

  breadcrumbs$: any;
  breadcrumbItems: MenuItem[] =[];
  home: MenuItem =  {icon: 'pi pi-home', routerLink: '/'};


  constructor(private breadcrumbService:BreadcrumbService) {

  }


  ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$.subscribe(breadcrumbs => {
      this.breadcrumbItems = breadcrumbs;
    });
  }

  ngOnDestroy(): void {
    if(this.breadcrumbs$){
      this.breadcrumbs$.unsubscribe();
    }
  }
}
