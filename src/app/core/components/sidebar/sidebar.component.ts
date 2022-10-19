import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menu = [
    {
      title: 'Inicio',
      icon: 'pi pi-home',
      link: '/home',
    },
    {
      title: 'Socios',
      icon: 'pi pi-volume-up',
      link: '/socios/home',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
