import { AuthService } from './../../../../core/services/auth.service';
import { ClasificacionSocio } from './clasificacion-socio.model';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClasificacionSocioService extends BaseService<ClasificacionSocio> {
  getRolePrefix(): string {
    return 'CLASIFICACION_SOCIO';
  }
  getRoute(): string {
    return 'clasificacionSocio';
  }
  getAutoCompleteField(): string {
    return 'nombre';
  }
  constructor(http: HttpClient, authService: AuthService) {
    super(http, authService);
  }
}
