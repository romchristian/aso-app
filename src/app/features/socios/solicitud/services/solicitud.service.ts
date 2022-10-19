import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base-service';
import { Socio } from '../../socio/services/socio.model';
import { Solicitud } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService extends BaseService<Solicitud> {
  getRolePrefix(): string {
    return 'SOLICITUD';
  }
  getRoute(): string {
    return  'solicitudes';
  }
  getAutoCompleteField(): string {
    return 'numeoro';
  }
  constructor(http: HttpClient, authService: AuthService) {
    super(http, authService);
  }
}

