import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuditService } from 'src/app/core/services/audit.service';
import { BaseCardStore } from 'src/app/core/util/base-card-store';
import { TipoDocumento } from '../../services/tipo-documento.model';
import { TipoDocumentoService } from '../../services/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento-card',
  templateUrl: './tipo-documento-card.component.html',
  styleUrls: ['./tipo-documento-card.component.css'],
  providers: [MessageService],
})
export class TipoDocumentoCardComponent extends BaseCardStore<TipoDocumento> implements OnInit {

  getUrl(): string {
    return '/socios/tipoDocumentos';
  }

  constructor(
    private fb: FormBuilder,
    route: ActivatedRoute,
    router: Router,
    public tipoDocumentoService: TipoDocumentoService,
    messageService: MessageService,
    auditService: AuditService
  ) {
    super(
      route,
      router,
      messageService,
      tipoDocumentoService,
      fb.group({
        nombre: ['', Validators.required],
        descripcion: [''],
      }),
      auditService
    );
  }

  ngOnInit(): void {
    this.onLoad();
  }

  get nombre() {
    return this.formABM.get('nombre');
  }

  beforeSave(): void { }
  loadDetalles(data: any): void { }
}


