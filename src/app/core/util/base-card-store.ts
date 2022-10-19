import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { TransformDate2 } from '../decorators/date-converter';
import { TransformDateToString } from '../decorators/date-converter1';
import { AuditService } from '../services/audit.service';

export abstract class BaseCardStore<T> {
  context = 'view';
  current: any;
  route: ActivatedRoute;
  router: Router;
  messageService: MessageService;
  formABM: FormGroup;
  service: any;
  auditService: AuditService;

  constructor(
    route: ActivatedRoute,
    router: Router,
    messageService: MessageService,
    service: any,
    formABM: FormGroup,
    auditService: AuditService
  ) {
    this.route = route;
    this.router = router;
    this.messageService = messageService;
    this.formABM = formABM;
    this.service = service;
    this.auditService = auditService;
  }

  @TransformDate2
  findById(): any {
    let id = this.route.snapshot.paramMap.get('id');
    return this.service.findById(id);
  }

  onLoad(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if (id && id != 'create') {
      this.findById().subscribe(
        (data: any) => {
          this.current = data;
          this.beforePatchValue(data);
          this.formABM.patchValue(data);
          this.loadDetalles(data);
          if (this.auditService)
            this.auditService?.$currentAudit.next(this.current);
        },
        (error: any) => {
          this.showMessageError(error);
        }
      );
    } else {
      this.context = 'create';
    }
  }

  save() {
    if (this.context != 'view' && this.formABM.valid) {
      this.beforeSave();

      let body = this.clean(this.formABM.value);

      this.transformDate()
        .pipe(take(1))
        .subscribe((data: any) => {
          body = data;

          console.log(this.context);
          switch (this.context) {
            case 'dialog':
              this.service
                .post(body)
                .pipe(take(1))
                .subscribe({
                  next: (data: any) => {
                    this.current = null;
                    this.onResult(data);
                  },
                  error: (err: any) => {
                    console.log('Error: ', err);
                    this.showMessageError(err.error.message);
                    // console.log(err.error);
                    // let array = err.error?.split('Detail');
                    // this.showMessageError(array[1], array[0]);
                  },
                });
              break;
            case 'create':
              this.service
                .post(body)
                .pipe(take(1))
                .subscribe({
                  next: (data: any) => {
                    this.context = 'view';
                    this.current = null;
                    this.router.navigate([this.getUrl()]);
                  },
                  error: (err: any) => {
                    console.log('Error: ', err);
                    this.showMessageError(err.error.message);
                    // console.log(err.error);
                    // let array = err.error?.split('Detail');
                    // this.showMessageError(array[1], array[0]);
                  },
                });
              break;
            case 'edit':
              this.service
                .put(this.current.id, body)
                .pipe(take(1))
                .subscribe({
                  next: (data: any) => {
                    this.context = 'view';
                    this.current = null;
                    this.router.navigate([this.getUrl()]);
                  },
                  error: (err: any) => {
                    console.log('Error: ', err);
                    this.showMessageError(err.error.message);
                    // let array = err.error?.split('Detail');
                    // this.showMessageError(array[1], array[0]);
                    // this.showMessageError(err);
                  },
                });
              break;
          }
        });
    } else {
      this.formABM.markAllAsTouched();
      this.showMessageError('Complete los campos obligatorios');
    }
  }

  delete(event: any) {
    console.log('delete' + event);

    if (this.current) {
      this.service
        .delete(this.current.id)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.showMessageSuccess('Se eliminó correctamente');
            this.router.navigate([this.getUrl()]);
          },
          error: () => {
            this.showMessageError('No se pudo eliminar');
          },
        });
    }
  }

  showMessageError(summary?: string, detail?: string) {
    this.messageService.add({
      severity: 'error',
      summary: summary ? summary : 'Error',
      detail: detail ? detail : 'No se pudo realizar la acción',
      sticky: true,
    });
  }

  showMessageSuccess(mensaje: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Exito',
      detail: mensaje,
    });
  }

  onContextChange(event: string) {
    this.context = event;
    this.onLoad();
  }

  clean(obj: any) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj;
  }

  @TransformDateToString
  transformDate() {
    return new Observable((observer) => {
      observer.next(this.formABM.value);
    });
  }

  abstract getUrl(): string;
  abstract beforeSave(): void;
  abstract loadDetalles(data: any): void;

  beforePatchValue(data: any): void {}
  onResult(data: any): void {}
}
