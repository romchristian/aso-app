import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base-service';
import { TipoDocumento } from './tipo-documento.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService extends BaseService<TipoDocumento> {
  getRolePrefix(): string {
    return 'TIPO_DOCUMENTO';
  }
  getRoute(): string {
    return 'tipoDocumentos';
  }
  getAutoCompleteField(): string {
    return 'nombre';
  }
  constructor(http: HttpClient, authService: AuthService) {
    super(http, authService);
  }
}
