import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MenuService, MyItemMenu } from '../../services/menu.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-module-home-page',
  templateUrl: './module-home-page.component.html',
  styleUrls: ['./module-home-page.component.css'],
  providers: [DialogService],
})
export class ModuleHomePageComponent implements OnInit, OnDestroy {
  @Input() title = 'Module title';
  @Input() description = 'Module description';
  @Input() icon = 'pi pi-home';
  @Input() modulo = '';

  ref: any;

  menu: any;
  constructor(
    public moduloMenu: MenuService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.menu = this.moduloMenu.getMenu(this.modulo);
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  showDialog(component: any, titulo: string) {
    this.ref = this.dialogService.open(component, {
      header: titulo,
      width: '70%',
      contentStyle: {
        'max-height': '500px',
        overflow: 'auto',
      },
    });
  }
}
