import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { AuditService } from 'src/app/core/services/audit.service';
import { BaseCardStore } from 'src/app/core/util/base-card-store';
import { TipoDocumentoService } from '../../../tipoDocumento/services/tipo-documento.service';
import { Socio } from '../../services/socio.model';
import { SocioService } from '../../services/socio.service';

@Component({
  selector: 'app-socio-card',
  templateUrl: './socio-card.component.html',
  styleUrls: ['./socio-card.component.css'],
  providers: [MessageService],

})
export class SocioCardComponent extends BaseCardStore<Socio> implements OnInit {

  getUrl(): string {
    return '/socios/socios';
  }
  detallesSb: Subject<any> = new Subject();

  constructor(
    private fb: FormBuilder,
    route: ActivatedRoute,
    router: Router,
    public socioService: SocioService,    
    messageService: MessageService,
    auditService: AuditService
  ) {
    super(
      route,
      router,
      messageService,
      socioService,
      fb.group({
        numeroSocio: ['', Validators.required],
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        esContribuyente: [''],
        tipoDocumento: [null, Validators.required],
        numeroDocumento: [''],
        fechaNacimiento: [''],
        nombreConyuge: [''],
        profesion: [''],
        direccionTrabajo: [''],
        telefonosTrabajo: [''],
        direccionParticular: [''],
        telefonoParticular: [''],
        celular: [''],
        email: [''],
        grupoSanguineo: [''],
        fechaIngreso: [''],
        clasificacionSocio: [null],
        solicitud: [null],
        periodosCursados: new FormArray([]),
      }),
      auditService
    );
  }

  ngOnInit(): void {
    this.onLoad();
  }

  get numeroSocio() {
    return this.formABM.get('numeroSocio');
  }

  beforeSave(): void { }
  loadDetalles(data: any): void { 
    this.detallesSb.next(data.periodosCursados);
    console.log(this.context );
  }
}
