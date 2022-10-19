import { ClasificacionSocioService } from './../../services/clasificacion-socio.service';
import { ClasificacionSocio } from './../../services/clasificacion-socio.model';
import { Component, OnInit } from '@angular/core';
import { BaseCardStore } from 'src/app/core/util/base-card-store';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuditService } from 'src/app/core/services/audit.service';

@Component({
  selector: 'app-clasificacion-socio-card',
  templateUrl: './clasificacion-socio-card.component.html',
  styleUrls: ['./clasificacion-socio-card.component.css'],
  providers: [MessageService],
})
export class ClasificacionSocioCardComponent
  extends BaseCardStore<ClasificacionSocio>
  implements OnInit
{
  getUrl(): string {
    return '/socios/clasificacionesSocios';
  }

  constructor(
    private fb: FormBuilder,
    route: ActivatedRoute,
    router: Router,
    public clasficacionSocioService: ClasificacionSocioService,
    messageService: MessageService,
    auditService: AuditService
  ) {
    super(
      route,
      router,
      messageService,
      clasficacionSocioService,
      fb.group({
        codigo: ['', Validators.required],
        nombre: ['', Validators.required],
        descripcion: [''],
      }),
      auditService
    );
  }

  ngOnInit(): void {
    this.onLoad();
  }

  get codigo() {
    return this.formABM.get('codigo');
  }

  beforeSave(): void {}
  loadDetalles(data: any): void {}
}
