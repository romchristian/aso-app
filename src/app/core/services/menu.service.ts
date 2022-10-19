import { SociosMenu } from './../../features/socios/socios.menu';
//import { MarketingMenu } from './../../features/marketing/marketing.menu';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menus: MyItemMenu[] = [
    {
      name: 'Dashboard',
      icon: 'pi pi-home',
      route: '/',
      isModule: true,
      isSection: false,
      submenu: [],
    },

    {
      name: 'Socios',
      icon: 'pi pi-shield',
      route: '/socios/home',
      isModule: true,
      isSection: false,
      submenu: SociosMenu,
    },
  ];

  constructor() {}

  getMenu(modulo: string): MyItemMenu {
    return this.menus.filter(
      (menu) => menu.isModule && menu.name === modulo
    )[0];
  }
}

export interface MyItemMenu {
  name: string;
  icon: string;
  route: string;
  isModule: boolean;
  isSection: boolean;
  submenu: MyItemMenu[];
}
