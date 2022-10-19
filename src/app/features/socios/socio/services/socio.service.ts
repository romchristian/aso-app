import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base-service';
import { Socio } from './socio.model';

@Injectable({
  providedIn: 'root'
})
export class SocioService extends BaseService<Socio> {
  getRolePrefix(): string {
    return 'SOCIO';
  }
  getRoute(): string {
    return 'socios';
  }
  getAutoCompleteField(): string {
    return 'nombres';
  }
  constructor(http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

  TipoPeriodoOptions = [
    { label: 'Primaria         ', value: 'PRIMARIA' },
    { label: 'Secundaria       ', value: 'SECUNDARIA' },
  ];
}
