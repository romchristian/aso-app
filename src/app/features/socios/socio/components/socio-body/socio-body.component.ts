import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClasificacionSocioService } from '../../../clasificacionSocio/services/clasificacion-socio.service';
import { TipoDocumentoService } from '../../../tipoDocumento/services/tipo-documento.service';
import { SocioService } from '../../services/socio.service';

@Component({
  selector: 'app-socio-body',
  templateUrl: './socio-body.component.html',
  styleUrls: ['./socio-body.component.css']
})
export class SocioBodyComponent implements OnInit {

  @Input() context: String = 'view';
  @Input() formABM!: FormGroup;

  constructor(
    public service: SocioService,     
    public tipoDocumentoService: TipoDocumentoService,
    public clasificacionSocioService:ClasificacionSocioService) { }

  ngOnInit(): void { }

  get numeroSocio() {
    return this.formABM.get('numeroSocio');
  }

  get nombres() {
    return this.formABM.get('nombres');
  }

  get apellidos() {
    return this.formABM.get('apellidos');
  }

  get esContribuyente() {
    return this.formABM.get('esContribuyente');
  }
  get tipoDocumento() {
    return this.formABM.get('tipoDocumento');
  }
  get numeroDocumento() {
    return this.formABM.get('numeroDocumento');
  }
  get fechaNacimiento() {
    return this.formABM.get('fechaNacimiento');
  }
  get nombreConyuge() {
    return this.formABM.get('nombreConyuge');
  }
  get profesion() {
    return this.formABM.get('profesion');
  }
  get direccionTrabajo() {
    return this.formABM.get('direccionTrabajo');
  }
  get telefonosTrabajo() {
    return this.formABM.get('telefonosTrabajo');
  }
  get direccionParticular() {
    return this.formABM.get('direccionParticular');
  }
  get telefonoParticular() {
    return this.formABM.get('telefonoParticular');
  }
  get celular() {
    return this.formABM.get('celular');
  }
  get email() {
    return this.formABM.get('email');
  }
  get grupoSanguineo() {
    return this.formABM.get('grupoSanguineo');
  }
  get fechaIngreso() {
    return this.formABM.get('fechaIngreso');
  }
  get clasificacionSocio() {
    return this.formABM.get('clasificacionSocio');
  }
  get solicitud() {
    return this.formABM.get('solicitud');
  }
  get periodosCursados() {
    return this.formABM.get('periodosCursados');
  }
}
