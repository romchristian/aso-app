import { CardpageService } from './../../services/cardpage.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { take } from 'rxjs';
import { ConfirmEventType, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityBase } from '../../model/entity-base';

@Component({
  selector: 'app-card-page-free',
  templateUrl: './card-page-free.component.html',
  styleUrls: ['./card-page-free.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class CardPageFreeComponent implements OnInit {
  @Input() description: any;
  @Input() context = 'view';
  @Input() footer = false;
  @Input() permisos = {
    create: true,
    update: true,
    delete: true,
  };
  @Output() onContextChange = new EventEmitter<string>();
  @Output() onDeleteConfirm = new EventEmitter<boolean>();
  displayActions: boolean = false;
  mostrarMasCampos: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private cardpageService: CardpageService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  contextChange(context: string) {
    this.onContextChange.emit(context);
  }

  confirmDelete() {
    this.confirmationService.confirm({
      message: 'De verdad quiere borrar este registro?',
      header: 'Confirmacion de eliminacion',
      icon: 'pi pi-danger-circle',
      accept: () => {
        this.onDeleteConfirm.emit(true);
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }
}
